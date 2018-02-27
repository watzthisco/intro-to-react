import React from 'react';
import CartItem from './CartItem';
import styles from './Cart.css.js';

class Cart extends React.Component{
    render(){
        return(
            <div style={styles.cart}>
                <h2>Cart</h2>
                {this.props.item.map(item=>(
                    <CartItem itemId={item}/>
                ))}
                Total: $x USD
            </div>
        );
    }
}

export default Cart;
