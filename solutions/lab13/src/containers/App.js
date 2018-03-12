import React from 'react';
import * as actionCreators from '../actions/';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import BookStore from './BookStore';

const mapStateToProps = (state, props) => {
    console.log("state" + state.cart.items);
    return {
        items: state.cart.items,
        products: state.products

    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(BookStore);

export default App;