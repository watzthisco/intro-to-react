import React from 'react';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';
import myData from '../data/products';

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
                    <ProductList products={myData} />
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
