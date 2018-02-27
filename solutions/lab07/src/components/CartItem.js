import React from 'react';
import styles from './CartItem.css.js';

class CartItem extends React.Component{
    render(){
        return(
            <div style={styles.cartItem}>
                <p>Item</p>
            </div>
        );
    }
}

export default CartItem;
