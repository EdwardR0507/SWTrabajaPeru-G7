import ReactDOM from 'react-dom';
import Index from "./index"


jest.mock('react-dom', ()=> ({render: jest.fn()}))

it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<Index/>, div);
  global.document.getElementById = (id) => id ==='root' && div
  expect(ReactDOM.render).toHaveBeenCalledWith(<Index />, div)
});