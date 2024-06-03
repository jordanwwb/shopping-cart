import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductQualityController = ({ cartItem }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
//   console.log('1111', cartItem)

  return (
    <div className="flex items-center justify-center">
      <button
        className="px-2 py-1 bg-gray-300 rounded-l-lg"
        onClick={() => removeFromCart(cartItem)}
      >
        -
      </button>
      <span className="px-4 py-2">{cartItem.quantity}</span>
      <button
        className="px-2 py-1 bg-gray-300 rounded-r-lg"
        onClick={() => addToCart(cartItem)}
      >
        +
      </button>
    </div>
  );
};

export default ProductQualityController;
