import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import { rest } from 'msw'
import { setupServer } from 'msw/node';
import DetailsRequestModal from "./DetailsRequestModal";
import GlobalEnv from "../../GlobalEnv"; 

describe("<DetailsRequestModal />", () => {
    const serverUser = setupServer(
        rest.post(`${GlobalEnv.host}/user-auth`, (req, res, ctx) => {
          return res(ctx.json({greeting: 'hello there'}))
        }),
      )
    const serverService = setupServer(
        rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
          return res(ctx.json({greeting: 'hello there'}))
        }),
      )
    
    beforeAll(() => {serverUser.listen(); serverService.listen()})
    afterEach(() => {serverUser.resetHandlers(); serverService.resetHandlers()})
    afterAll(() => {serverUser.close(); serverService.close()})

    it('render "DetailsRequestModal"', () => {
        const wrapper = shallow(<DetailsRequestModal />);
        expect(wrapper).toMatchSnapshot()
      }); 
      it("get Service in `DetailsRequestModal`", () => {
        serverService.use(
            rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
              return res(ctx.status(500))
            }),
          )
        const { getByRole } = render(<DetailsRequestModal />);
        expect(screen.getByRole('solicited-services')).toHaveTextContent('Cargando...')
    })
    it("test HanldeClose", () => {
        const wrapper = shallow(<DetailsRequestModal />);
          const button = wrapper.find({role: "close"});
          const open = wrapper.find({role: "Modal"});
          button.simulate("click")
          expect(open.props("open")).toBe(false)
    })
    it("test HanldeOpen", () => {
      const wrapper = shallow(<DetailsRequestModal />);
        const button = wrapper.find({role: "open"});
        const open = wrapper.find({role: "Modal"});
        button.simulate("click")
        serverService.use(
          rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
            return res(ctx.status(500))
          }),
        )
        expect(open.props("open")).toBe(true)
  })
  it("test OnSubmit", () => {
    const wrapper = shallow(<DetailsRequestModal />);
      const button = wrapper.find({role: "submit"});
      button.simulate("click")
      serverService.use(
        rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
          return res(ctx.status(500))
        }), )
      expect(wrapper.props("onSubmit")).toBeCalled()
  })
})