import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product, imageOnLeft = false }) => {

    return (
        <div key={product.id} className={`border p-4 rounded shadow bg-white ${imageOnLeft ? 'flex flex-row' : 'flex flex-col'}`}>
            <Link to={`/product/${product.id}`} className={`${imageOnLeft ? 'w-1/3' : 'w-full flex justify-center'}`}>
                <img src={product.image} alt={product.title} className={`object-contain ${imageOnLeft ? 'h-32 mr-4' : 'h-64 mb-4'}`} />
            </Link>
            <div className={`${imageOnLeft ? 'w-2/3' : 'w-full'}`}>
                <Link to={`/product/${product.id}`}>
                    <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                </Link>
                <p className="text-gray-700 mb-2">{product.description.length > 100 ? `${product.description.substring(0, 200)}...` : product.description}</p>
                <div className="flex items-center justify-between mb-4">
                    <p className="text-lg font-bold">${product.price}</p>
                    <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-gray-600">{product.rating.rate} ({product.rating.count} reviews)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
