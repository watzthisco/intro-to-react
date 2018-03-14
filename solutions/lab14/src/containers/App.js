import React from 'react';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';
//import productsData from '../data/products';

class App extends React.Component {
    constructor() {
        super();


        this.sortedProducts = [];
    }

    componentWillMount(){
        this.sortedProducts = this.shuffleArray(this.props.products);
    }

    getProduct(products, item) {
        return products.find(product => item === product.id);
    }


    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }


    render() {

        let items = this.props.items.map(id => this.getProduct(this.props.products, id));

        return (
            <div className="container">
                <header className="row">
                    <div className="col-md-12">
                        <h1>Welcome to React Bookstore</h1>
                    </div>
                </header>
                <div className="row">
                    <div className="col-md-8">
                        <ProductList addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart}
                                     products={this.sortedProducts} inCart={this.props.items}/>
                    </div>
                    <div className="col-md-4">
                        <Cart removeFromCart={this.props.removeFromCart}
                              submitCart = {this.props.submitCart}
                              inCart={items} />
                    </div>
                </div>
                <footer>
                </footer>
            </div>
        );
    }
}

export default App;
