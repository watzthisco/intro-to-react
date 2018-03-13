import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';
import productsData from './data/products';
import {cart, products} from './reducers';
import * as actionCreators from './actions/';
import './index.css';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';

const rootReducer = combineReducers({
    cart: cart,
    products: products
});

const initialState = {
    cart: {items:[]},
    products: productsData
};

let store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const mapStateToProps = (state, props) => {
    return {
        items: state.cart.items,
        products: state.products

    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

let ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(<Provider store={store}><ReduxApp /></Provider>, document.getElementById('root'));
