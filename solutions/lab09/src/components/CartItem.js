import React from 'react';
import styles from './CartItem.css.js';

class CartItem extends React.Component{
    render(){
        return(
            <div style={styles.cartItem}>
                {this.props.title} - {this.props.price}
            </div>
        );
    }
}

export default CartItem;
