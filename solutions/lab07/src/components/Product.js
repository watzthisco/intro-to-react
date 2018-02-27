import React from 'react';
import styles from './Product.css.js';

class Product extends React.Component{

    render(){
        const { title, author, published, country, lang, pages, image, url, price } = this.props;

        return(
                <div style={styles.product}>
                    <a href={url}><img style={styles.thumbnail} src={image ? "images/" + image:"images/default.jpg"} alt="{title}" /></a>
                    <div>
                        <h3><a href={url}>{title}</a></h3>
                        <div>by: {author}</div>
                        <div>Published: {published}, {country}</div>
                        <div>Language: {lang}</div>
                        <div>Pages: {pages}</div>
                        <div>Price: ${price}</div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            );
        }
    }

export default Product;