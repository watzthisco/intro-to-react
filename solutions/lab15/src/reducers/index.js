export function cart(state = {}, action = {}) {
    switch(action.type) {
        case 'CART_ADD':
            let biggerCart = [...state.items, action.payload.productId];
            localStorage.setItem("cart", JSON.stringify(biggerCart));
            return {
                ...state,
                items: biggerCart
            };

        case 'CART_REMOVE':
            let smallerCart = state.items.filter(id => id !== action.payload.productId);

            localStorage.setItem("cart", JSON.stringify(smallerCart));

            return {
                ...state,
                items: smallerCart
            };

        case 'READ_CART':
            let cart = localStorage.getItem("cart");
            cart = JSON.parse(cart);
            return {
                ...state,
                items: cart || []
            };
        case 'CHECKOUT': 
            return { 
                ...state, 
                items: [] 
            };

        default:
            return state; //no relevant action type
    }
}

export function products(state = {}, action = {}) {
    switch (action.type) {
        default:
            return state; //no relevant action type 
    }
}
