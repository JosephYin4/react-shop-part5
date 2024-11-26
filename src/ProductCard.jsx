/* import React from 'react';
import { useCart } from './CartStore';
import {useLocation} from 'wouter';
import { useFlashMessage } from './FlashMessageStore';

const ProductCard = (props) => {

  const { addToCart} = useCart();
  const [, setLocation] = useLocation();
  const { showMessage } = useFlashMessage();

  const handleAddToCart = () => {    
    addToCart(props);
    showMessage('Item added to cart', 'success');
    setLocation('/cart');
  }

  return (
    <div className="card">
      <img
        src={props.imageUrl}
        className="card-img-top"
        alt={props.productName}
      />
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">${props.price}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; */

import React from 'react';
import { useCart } from './CartStore';
import {useLocation} from 'wouter';
import { useFlashMessage } from './FlashMessageStore';

const ProductCard = ({ id, productName, price, imageUrl }) => {
  const { addToCart } = useCart();
  const [, setLocation] = useLocation();
  const { showMessage } = useFlashMessage();

  const handleAddToCart = () => {    
    addToCart({
      id, 
      productName, 
      price, 
      imageUrl
    });
    showMessage('Item added to cart', 'success');
    setLocation('/cart');
  }

  return (
    <div className="card">
      <img
        src={imageUrl}
        className="card-img-top"
        alt={productName}
      />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">${price}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;