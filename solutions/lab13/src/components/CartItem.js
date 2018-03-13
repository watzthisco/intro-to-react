import React from 'react';
import styles from './CartItem.css.js';
import PropTypes from 'prop-types';

class CartItem extends React.Component{
    handleClick(e){
        this.props.removeFromCart(this.props.id);
    }
    render(){
        return(
            <div style={styles.cartItem}>
                {this.props.title} - {this.props.price}
                <button onClick={this.handleClick.bind(this)}>remove</button>
            </div>
        );
    }
}

CartItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string
};
export default CartItem;
