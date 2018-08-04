import React from 'react';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';
import productsData from '../data/products';
import {Route, Switch, Link} from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import BookStore from './BookStore';
import HomePage from '../components/HomePage';
import Header from '../components/Header';

class App extends React.Component {


    render() {

        return (
            <div className="container">
                <Route path="/" component={Header} />
                
                <nav>
                    <Link to="/">Home</Link> |
                    <Link to="/about">About The Bookstore</Link> |
                    <Link to="/bookstore">Bookstore</Link>
                </nav>
                <Switch>
                    <Route path="/about" component={AboutUs} />
                    <Route path="/bookstore" component={BookStore} />
                    <Route path="/" component={HomePage} />
                </Switch>

            </div>
        );
    }
}

export default App;
