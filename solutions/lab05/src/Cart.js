import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    render(){
        return(
            <div>
                <h2>Cart</h2>
                <CartItem />
                <CartItem />
                <CartItem />
                Total: $x USD
            </div>
        );
    }
}

export default Cart;
