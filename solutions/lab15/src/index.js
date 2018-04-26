import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, bindActionCreators, applyMiddleware, compose} from 'redux';
import {Provider, connect} from 'react-redux';
import ReduxThunk from 'redux-thunk';
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
    cart: {items: []},
    products: productsData
};


const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(createStore);
let store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({ type: "READ_CART" });

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
