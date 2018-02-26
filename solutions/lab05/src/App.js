import React from 'react';
import Cart from './Cart';
import ProductList from './ProductList';

function App() {
    return (
        <div>
            <header>
                <div>
                    <h1>Welcome to React Bookstore</h1>
                </div>
            </header>
            <div>
                <div>
                    <ProductList/>
                </div>
                <div>
                    <Cart/>
                </div>
            </div>
            <footer>
            </footer>
        </div>
    );
}

export default App;
