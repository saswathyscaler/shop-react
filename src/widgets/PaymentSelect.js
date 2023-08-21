import React, { useState } from 'react'

const PaymentSelect = ({onSelect}) => {

    const [selectedMode, setSelectedMode] = useState("");

    const handleModeSelect = (mode) => {
      setSelectedMode(mode);
      onSelect(mode);
    };
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">Select Payment Mode</h2>
      <div className="flex gap-4">
        <button
          className={`py-2 px-4 rounded ${
            selectedMode === "credit_card" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleModeSelect("credit_card")}
        >
          Credit Card
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedMode === "paypal" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleModeSelect("paypal")}
        >
          PayPal
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedMode === "cash_on_delivery" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleModeSelect("cash_on_delivery")}
        >
          Cash on Delivery
        </button>
      </div>
    </div>
  )
}

export default PaymentSelect