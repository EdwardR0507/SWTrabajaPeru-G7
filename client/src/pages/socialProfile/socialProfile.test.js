/*Importamos las librerias principales*/
import React from "react";
import SocialProfile from "./index";
import ProfileCard from "../../components/Cards/ProfileCard";
import { shallow } from "enzyme";
/*Renderizado de la vista Social Profile*/
describe("<SocialProfile></SocialProfile>", () => {
  it('render `ProfileCard`', () => {
    const wrapper = shallow(<SocialProfile />);
    expect(wrapper).toMatchSnapshot()
  });
  it('should have an `ProfileCard` element', () => {
    const wrapper = shallow(<SocialProfile />);
    expect(wrapper.contains(<ProfileCard></ProfileCard>)).toBe(true);
  });
});
