import React, { useState } from "react";
import Razorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(localStorage.getItem("cartTotal"));
  const [formData, setFormData] = useState({
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePayment = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/makePayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { order_id } = data;

        const options = {
          key: "rzp_test_IzpYmT0kXUEGAc",
          amount: total * 100, 
          currency: "INR",
          name: "SHOP-SHOP",
          description: "Payment for your order",
          order_id: order_id,
          handler: function (response) {
            console.log("Payment successful:", response);
            
            fetch("http://localhost:8000/api/placeOrder", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                amount: total,
                payment_id: order_id,
                
                
              }),
            })
              .then((orderResponse) => {
                if (orderResponse.ok) {
                  console.log("Order placed successfully");
                } else {
                  console.error("Error placing order:", orderResponse.statusText);
                }
              })
              .catch((error) => {
                console.error("Error placing order:", error);
              });

            // Redirect to a success page or take other actions
            navigate("/orderSuccess");
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        console.error("Error creating order:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
      
      <button
        onClick={handlePayment}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
