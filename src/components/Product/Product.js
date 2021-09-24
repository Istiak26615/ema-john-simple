import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const { name ,img,seller, price, stock, star}= props.product;
    const cartItem = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
            <img src={img} alt=""/>
            </div>
            <div >
            <h4 className="product-name">{name}</h4>
            <p><small>by:{seller}</small></p>
            <p><small>only {stock} left in stock</small></p>
            <p>price: ${price}</p>
            <Rating
            initialRating={star}
            emptySymbol=" icon-color far fa-star"
            fullSymbol="icon-color fas fa-star"
             readonly/><br/>
            <button
            onClick={()=>props.handleAddToCart(props.product)}
            className="btn-regular">{cartItem}add to cart</button>

            </div>
        </div>
    );
};

export default Product;