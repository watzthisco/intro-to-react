import React from 'react';
import Cart from './Cart';
import ProductList from './ProductList';
import '../App.css';

function App() {
    return (
        <div className="container">
            <header className="row">
                <div className="col-md-12">
                    <h1>Welcome to React Bookstore</h1>
                </div>
            </header>
            <div className="row">
                <div className="col-md-8">
                    <ProductList/>
                </div>
                <div className="col-md-4">
                    <Cart/>
                </div>
            </div>
            <footer>
            </footer>
        </div>
    );
}

export default App;
