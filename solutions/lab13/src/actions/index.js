export function addToCart(productId) {
    return {type: 'CART_ADD', payload: {productId}}
}

export function removeFromCart(productId) {
    return {type: 'CART_REMOVE', payload: {productId}}
}
