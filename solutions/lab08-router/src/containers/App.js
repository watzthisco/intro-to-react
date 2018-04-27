import React from 'react';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';
import productsData from '../data/products';
import {Link,Route} from 'react-router-dom';
import AboutUs from '../components/AboutUs.js';

class App extends React.Component {
    constructor(){
        super();
        this.state={
            items:["1","3","5"]
        }
    }

    getProduct(products, item) {
        return products.find(product => item === product.id);
    }


    render() {

        let items = this.state.items.map(id => this.getProduct(productsData,id));

        return (

            <div className="container">
                <nav>
                    <Link to="/about">About the Store</Link>
                </nav>
                <header className="row">
                    <div className="col-md-12">
                        <h1>Welcome to React Bookstore</h1>
                    </div>
                    <p><Route path="/about" component={AboutUs} /></p>
                </header>
                <div className="row">
                    <div className="col-md-8">
                        <ProductList products={productsData} inCart={this.state.items}/>
                    </div>
                    <div className="col-md-4">
                        <Cart inCart={items}/>
                    </div>
                </div>
                <footer>
                </footer>
            </div>
        );
    }
}

export default App;
