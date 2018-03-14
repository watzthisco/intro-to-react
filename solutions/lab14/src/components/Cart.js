import React from 'react';
import CartItem from './CartItem';
import styles from './Cart.css.js';
import PropTypes from 'prop-types';

class Cart extends React.Component{

    handleSubmitCart(){ 
        this.props.submitCart(this.props.inCart);
     }

    calculateTotal(items){
        let total = 0;
        for (let i = 0; i<items.length; i++) {
            total += Number(items[i].price);
        }
        return total;
    }
    render(){
        return(
            <div style={styles.cart}>
                <h2>Cart</h2>
                {this.props.inCart.map(item=>(
                    <CartItem removeFromCart = {this.props.removeFromCart} key={item.id} {...item} />
                ))}
                Total: ${this.calculateTotal(this.props.inCart)} USD
                <div><button onClick={this.handleSubmitCart.bind(this)}>
                    Check Out
                </button></div>

            </div>
        );
    }
}

Cart.propTypes = {
  items: PropTypes.array
};
export default Cart;
