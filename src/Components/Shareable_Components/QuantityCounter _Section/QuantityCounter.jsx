import { useState } from "react";

const QuantityCounter = ({ initialValue, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleDecrement}
        className="px-2 py-1 border border-gray-200 mr-2 focus:outline-none"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={handleIncrement}
        className="px-2 py-1 border border-gray-200 ml-2 focus:outline-none"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
