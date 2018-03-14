export function addToCart(productId) {
    return {type: 'CART_ADD', payload: {productId}}
}

export function removeFromCart(productId) {
    return {type: 'CART_REMOVE', payload: {productId}}
}

export function checkOut(data){
    return {type: 'CHECKOUT', payload: {data}}
}

export function submitCart(data) {
    return dispatch => {
        fetch('http://localhost:8080/checkout/', {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, cors, *same-origin
            redirect: 'follow', // *manual, follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })
            .then(response => {
                //const data = response.json();
                dispatch(checkOut(data));
            })
            .catch(error => dispatch({
            type: 'FETCH_FAILED', error
            })
        );
    };
}
