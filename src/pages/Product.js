import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, fetchProductsByCategory } from '../apis/productApi';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { CartContext } from '../context/CartContext';
import ProductQualityController from '../components/Product/ProductQualityController';
import { FaStar } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import ProductCard from '../components/Home/ProductCard';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cartItems, addToCart } = useContext(CartContext);
  const [relatedProducts, setRelatedProducts] = useState([]);


  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        const relatedProductsData = await fetchProductsByCategory(data.category);
        setRelatedProducts(relatedProductsData.filter(item => item.id !== data.id));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const currentItem = product ? cartItems.find(item => item.id === product.id) : null;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row border p-4 rounded shadow bg-white">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 border">
          <TransformWrapper>
            <TransformComponent>
              <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-lg" />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xl font-bold">${product.price}</p>
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-gray-600">{product.rating.rate} ({product.rating.count} reviews)</span>
            </div>
          </div>
          {currentItem ? (
            <ProductQualityController cartItem={currentItem} />
          ) : (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => {
                addToCart(product)
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true}>
          {relatedProducts.map(item => (
            <ProductCard product={item} imageOnLeft={true} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Product;
