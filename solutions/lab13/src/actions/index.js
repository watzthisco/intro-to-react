export function addToCart(productId) {
    console.log("add" + productId);
    return {type: 'CART_ADD', payload: {productId}}
}

export function removeFromCart(productId) {
    console.log("remove" + productId);

    return {type: 'CART_REMOVE', payload: {productId}}
}
