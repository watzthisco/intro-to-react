import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { title, author, published, country, lang, pages, image, url, price, isInCart } = this.props;

        return (
            <div className="product thumbnail">
                <a href={url}><img src={image ? "images/" + image:"images/default.jpg"} alt="{title}" /></a>
                <div className="caption">
                    <h3><a href={url}>{title}</a></h3>
                    <div className="product__price">by: {author}</div>
                    <div>Published: {published}, {country}</div>
                    <div>Language: {lang}</div>
                    <div>Pages: {pages}</div>
                    <div>Price: ${price}</div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
