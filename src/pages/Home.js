import React, { useEffect, useState } from 'react';
import { fetchProductCategories } from '../apis/productApi';
import ProductByCategory from '../components/Home/ProductByCategory';
import { HashLink } from 'react-router-hash-link';
import ReturnToTopButton from '../components/Home/ReturnToTopButton';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categories = await fetchProductCategories();
        setCategories(categories);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Available Products</h1>
      <nav className="mb-6 py-4">
        <ul className="flex justify-center space-x-6">
          {categories.map(category => (
            <li key={category}>
              <HashLink to={`#${category}`} smooth className="text-lg font-semibold hover:text-gray-300 transition-colors duration-200">
                {category}
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>

      {categories.map(category => (
        <div key={category} id={category} className="mb-8 p-4 border rounded-lg shadow-lg bg-slate-300">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <ProductByCategory category={category} />
        </div>
      ))}

      <ReturnToTopButton />
    </div>
  );
};

export default Home;
