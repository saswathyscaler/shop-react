import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { BiSolidEditAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);


  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDeleteproduct = async (productId) => {
    try {
      const accessToken = localStorage.getItem("token");

      if (!accessToken) {
        console.error("Access token not found");
        return;
      }

      const response = await fetch(
        `http://localhost:8000/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200) {
        toast.success("Property deleted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

      } 
      
      
      else if (response.status === 404) {
        toast.error("Property not found", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } 
    } catch (error) {
      console.error("An error occurred while deleting the property:", error);
      toast.error("An error occurred while deleting the property", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Product Dashboard</h2>
      <ul className="space-y-4">
        {products.map(product => (
          <li key={product.id} className="border p-4 flex items-center justify-between">
            <span className="text-lg font-medium">{product.name} - ₹ {product.price}</span>
            <div>
              <button className="px-3 py-2 w-10 bg-blue-400 text-white rounded mr-2">
                <BiSolidEditAlt size={20} />
              </button>
              <button onClick={() => handleDeleteproduct(product.id)} className="px-3 py-2 w-10 bg-red-400 text-white rounded">
                <FaTrashAlt size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
