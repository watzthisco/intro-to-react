import React from 'react';
import Product from './Product';
import styles from './ProductList.css.js';

class ProductList extends React.Component{
    render(){
        const inCart = this.props.inCart;
        return(
            <ul style={styles.productList}>
                {this.props.products.map(product => (
                    <li key={product.id} style={styles.productListItem}>
                        <Product {...product} inCart = {inCart.includes(product.id)?'1':''} />
                    </li>
                ))}
            </ul>
        );
    }
}

export default ProductList;
