import React from 'react';
import Product from './Product';
import styles from './ProductList.css.js';

class ProductList extends React.Component{
    render(){
        const inCart = this.props.inCart;
        const products = this.props.products;

        if(products.length > 0) {
            return (
                <ul style={styles.productList}>
                    {products.map(product => (
                        <li key={product.id} style={styles.productListItem}>
                            <Product {...product}
                                     inCart={inCart.includes(product.id) ? '1' : ''}
                                     addToCart={this.props.addToCart}
                                     removeFromCart={this.props.removeFromCart}
                            />
                        </li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    }
}

export default ProductList;
