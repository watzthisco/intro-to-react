import React from 'react';
import Product from './Product';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
    const component = shallow(<Product title="Test" />);
    expect(component.text()).toEqual('Testby: Published: , Language: Pages: Price: $Add to Cart');
});
