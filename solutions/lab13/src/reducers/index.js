export function cart(state = {}, action = {}) {
    switch(action.type) {
        case 'CART_ADD':
            console.log('adding');
            return {
                ...state,
                items: [ ...state.items, action.payload.productId ]
            };
        case 'CART_REMOVE':
            return {
                ...state,
                items: state.items.filter(id => id !== action.payload.productId)
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
