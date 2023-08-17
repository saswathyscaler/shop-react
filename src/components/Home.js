import React, { useState, useEffect } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 shadow-md">
        <div>
        <img src= {product.image} alt="" />
       
        </div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <div className="mt-2 text-blue-500">Price: ₹ {product.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
