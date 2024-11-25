import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function ProductPage() {
  const [products, setProducts] = useState([]);

/*  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products.json');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }; */

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          //const response = await axios.get('/featured.json');
          console.log(import.meta.env.VITE_API_URL);
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
    
      fetchProducts();
    }, []);



  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="row">
      {products.map(products => (
          <div key={products.id} className="col-md-4 mb-4">
            <ProductCard
              id={products.id}
              imageUrl={products.image}
              productName={products.name}
              price={products.price.toFixed(2)}
             // description={product.description}
              //category={product.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;