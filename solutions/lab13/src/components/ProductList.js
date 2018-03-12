import React from 'react';
import Product from './Product';
import styles from './ProductList.css.js';
import PropTypes from 'prop-types';

class ProductList extends React.Component{
    render(){
        const inCart = this.props.inCart;
        return(
            <ul style={styles.productList}>
                {this.props.products.map(product => (
                    <li key={product.id} style={styles.productListItem}>
                        <Product {...product}
                                 inCart = {inCart.includes(product.id)?'1':''}
                                 addToCart={this.props.addToCart}
                                 removeFromCart={this.props.removeFromCart}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}

ProductList.propTypes = {
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func,
    products: PropTypes.array,
    inCart: PropTypes.array
};

export default ProductList;
