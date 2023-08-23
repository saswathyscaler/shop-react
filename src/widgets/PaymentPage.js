import React from "react";

const PaymentPage = () => {
  const handlePayment = async () => {
    const total =  localStorage.getItem('cartTotal')
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
          amount: total, 
          currency: "INR",
          name: "SHOP-SHOP",
          description: " Payment for your order",
          order_id: order_id,
          handler: function (response) {
            console.log("Payment successful:", response);
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
