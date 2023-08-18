import React from "react";

const ProductCard = ({product}) => {
  return (
    <div>
      <div key={product.id} className="bg-white p-4 shadow-md text-center">
        <div>
        <img src={`http://localhost:8000/storage/${product.image}`} alt={product.name} />
        </div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-green-600">Min. 55% off</p>
      </div>
    </div>
  );
};

export default ProductCard;
