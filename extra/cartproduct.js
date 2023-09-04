

<ul className="grid grid-cols-1 md:grid-cols-6 m-4">


{products.map((product) => (
              <li
                key={product.id}
                className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 "
              >
                <div className="col-span-4">
                  <img
                    src={`http://localhost:8000/storage/${product.product?.image}`}
                    className="w-26 h-20 object-cover rounded"
                    alt="Product"
                  />
                </div>
                <div className="col-span-4 flex flex-col justify-between">
                  <h3 className="font-semibold">{product.product.name}</h3>
                  <p className="text-gray-500">{product.product.category}</p>
                  <p className="text-gray-600">
                    Price: ₹{product.product.price}
                  </p>
                  <p className="text-gray-600">Quantity: {product.quantity}</p>
                  <button
                    onClick={() => removeFromCart(product.id, product.quantity)}
                    className="mt-2 bg-red-500 text-white px-3 py-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}

            <div className="col-span-6 text-right font-bold">
              Total: ₹
              {couponApplied
                ? localStorage.getItem("cartTotal")
                : calculateTotal()}
            </div>
          </ul>