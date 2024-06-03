import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductQualityController from '../components/Product/ProductQualityController';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getCartTotal } = useContext(CartContext);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='container'>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="w-20 h-20">
                <img src={item.image} alt={item.title} className="object-contain w-full h-full" />
              </div>
              <div className="flex-1 ml-4">
                <Link to={`/product/${item.id}`}>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </Link>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center">
                <ProductQualityController cartItem={item} />
                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="text-right mt-4">
            <h3 className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
