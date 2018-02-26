import React from 'react';
import Product from './Product';
import styles from './ProductList.css.js';

class ProductList extends React.Component{
    render(){
        return(
            <ul style={styles.productList}>
                <li style={styles.productListItem}><Product /></li>
                <li style={styles.productListItem}><Product /></li>
                <li style={styles.productListItem}><Product /></li>
                <li style={styles.productListItem}><Product /></li>
                <li style={styles.productListItem}><Product /></li>
                <li style={styles.productListItem}><Product /></li>
                <li style={styles.productListItem}><Product /></li>
                <li style={styles.productListItem}><Product /></li>
                <li style={styles.productListItem}><Product /></li>
                <li style={styles.productListItem}><Product /></li>
            </ul>
        );
    }
}

export default ProductList;
