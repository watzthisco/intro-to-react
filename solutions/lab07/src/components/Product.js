import React from 'react';
import styles from './Product.css.js';

class Product extends React.Component{
    render(){
        return(
            <div style={styles.product}>
                <div>Image Here</div>
                <div>
                    <h2>Title</h2>
                    <p>
                        by: Author<br />
                        published: year, country<br />
                        language: lang<br />
                        pages: num-pages<br />
                        price: $x<br />
                    </p>
                    <button>Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default Product;
