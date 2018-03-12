import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore, combineReducers} from 'redux';
import cartReducer from './reducers/cartReducer';
import productsReducer from './reducers/productsReducer';
import productsData from './data/products';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

const initialState = {
    cart: {items:[]},
    products: productsData
};
console.log("initial items: " + initialState.cart.items);
console.log("initial products: " + initialState.products);
let store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
