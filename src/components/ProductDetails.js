import React, { useState } from "react";
import { BsLightningFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        console.log("Fetching property details...");
        fetch(`http://127.0.0.1:8000/api//products/${productId}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("Fetched property data:", data);
            setProperty(data);
          })
          .catch((error) => console.error("Error fetching property:", error));
      }, [productId]);
    
      const handleEditProperty = () => {
        setShowUpdate(true);
      };


  return (
    <div>
      <div className="p-2">
        <div className="flex flex-col md:flex-row m-5">
          <div className="w-full md:w-1/2 pr-6 mb-4 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full border rounded-lg"
            />
            <div className="flex justify-center mt-4">
            <button
              onClick={handleCart}
              className="bg-[#ff9f00] p-2 md:p-4 border rounded-md mx-2"
            >
          <BsCartPlus/>Add to Cart
            </button>
            <button
              onClick={handleBuy}
              className="bg-[#fb641b] p-2 md:p-4 border rounded-md mx-2"
            >
            <BsLightningFill/> Buy Now
            </button>
          </div>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="ml-6 font-light text-2xl text-green-600 items-center">
              {product.name.toUpperCase()}
            </h1>
            <h1>
              <span className="font-bold text-blue-300">Property Type : </span>
              {product.type}
            </h1>
            <p className="text-green-400">Special price</p>
            <h1>
              <span className="font-bold text-blue-300">Price : </span>₹
              {product.price} 
              <span></span>
              <p className=" text-green-400">52%off</p>
            </h1>
            <p>hurry only: {property.stock_quantity} </p>

            <div className="mt-4">
              <h1 className="font-bold text-blue-300">
                About This Product 
              </h1>
              <p>Description: {product.description}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-300 p-2 md:p-4 border rounded-md ml-5 mb-3 block"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
