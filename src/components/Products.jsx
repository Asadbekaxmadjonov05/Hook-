import React from 'react';
import { useFetch } from '../hook/useCalcculate';
import { gsap } from 'gsap';

const Products = () => {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

  // Animation with GSAP
  React.useEffect(() => {
    gsap.from('.product-card', { opacity: 0, x: -50, duration: 0.8, stagger: 0.2 });
  }, [data]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data && data.map(product => (
          <div 
            key={product.id} 
            className="product-card bg-white shadow-lg hover:shadow-xl p-6 rounded-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-3/4 h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">{product.title}</h2>
            <p className="text-gray-600 mb-2">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
