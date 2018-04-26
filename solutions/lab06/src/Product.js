import React from 'react';
import styles from './Product.css.js';

const Product = (props) => {

    const {author,title,year,country,lang,pages,price} = props;

    return (
        <div style={styles.product}>
            <div>Image Here</div>
            <div>
                <h2>{title}</h2>
                <p>
                    by: {author}<br/>
                    published: {year}, {country}<br/>
                    language: {lang}<br/>
                    pages: {pages}<br/>
                    price: ${price}<br/>
                </p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
