import React from 'react';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';
import productsData from '../data/products';

class App extends React.Component {
    constructor(){
        super();
        this.state={
            items:[]
        };
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    getProduct(products, item) {
        return products.find(product => item === product.id);
    }

    addToCart(idToAdd) {
        let newItems = [...this.state.items, idToAdd];
        this.setState({
            items: newItems
        });
    }

    removeFromCart(idToRemove) {
        let newItems = this.state.items.filter(
            id => id !== idToRemove);
        this.setState({items: newItems});
    }

    render() {

        let items = this.state.items.map(id => this.getProduct(productsData,id));

        return (
            <div className="container">

                <header className="row">
                    <div className="col-md-12">
                        <h2>React Bookstore</h2>
                    </div>
                </header>



                <div className="row">
                    <div className="col-md-8">
                        <ProductList addToCart = {this.addToCart} removeFromCart = {this.removeFromCart} products={productsData} inCart={this.state.items}/>
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
