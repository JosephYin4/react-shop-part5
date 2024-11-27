import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        setFeaturedProducts(response.data); // Assuming the response data is an array of products
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const renderFeaturedProducts = () => {
    return featuredProducts.map((products) => (
      <div key={products.id} className="col-md-4 mb-4">
        <ProductCard
          id={products.id}
          imageUrl={products.image}
          productName={products.name}
          price={products.price.toFixed(2)}
          // description={product.description}
          // category={product.category}
        />

      </div>
      
    ));
  };

  return (
    <>
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to E-Shop</h1>
          <p className="lead">Discover amazing products at unbeatable prices!</p>
          <a href="#" className="btn btn-light btn-lg">Shop Now</a>
        </div>
      </header>

      <main className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        <div className="row">
          {renderFeaturedProducts()}
        </div>
      </main>
    </>
  );
}

export default HomePage;
