import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
    return (
        <div className="container">
            <header className="row">
                <div className="col-md-12">
                    <h1>Welcome to React Bookstore</h1>
                </div>
            </header>

            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                    made by <a href="https://twitter.com/krzysu">Kris Urbas</a>, source code available on <a href="https://github.com/krzysu/reactjs-shopping-cart">github</a>
                </small>
            </footer>
        </div>
    );
}

export default App;
