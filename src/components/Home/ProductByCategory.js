import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../../apis/productApi";
import ProductCard from "./ProductCard";

const ProductByCategory = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await fetchProductsByCategory(category);
                setProducts(products);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        getProducts();
    }, [category]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductByCategory;
