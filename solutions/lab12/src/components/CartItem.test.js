import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const renderedCartItem = shallow(<CartItem />);
});
