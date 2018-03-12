import React from 'react';
import CartItem from './CartItem';
import styles from './Cart.css.js';
import PropTypes from 'prop-types';


class Cart extends React.Component{
    getProduct(products, item) {
        console.log("item in getProduct" + item);
        return products.find(product => item == product.id);
    }

    calculateTotal(items){
        let total = 0;
        for (let i = 0; i<items.length; i++) {
            total += Number(items[i].price);
        }
        return total;
    }
    render(){
        let items = this.props.inCart.map(id => this.getProduct(this.props.products, id));
        console.log('items'+items);

        return(
            <div style={styles.cart}>
                <h2>Cart</h2>
                {items.map(item=>(
                    <CartItem key={item.id} {...item} />
                ))}
                Total: ${this.calculateTotal(this.props.inCart)} USD
            </div>
        );
    }
}

Cart.propTypes = {
  items: PropTypes.array
};
export default Cart;
