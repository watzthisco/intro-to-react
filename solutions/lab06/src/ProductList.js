import React from 'react';
import Product from './Product';

class ProductList extends React.Component{
    render(){
        return(
            <div>
                <Product />
                <Product />
            </div>
        );
    }
}

export default ProductList;
