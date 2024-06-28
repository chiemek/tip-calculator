import React from "react";

const Button = ({ handleBill, handlePercent1, handlePercent2 }) => {
  const handleReset = () => {
    handleBill(0);
    handlePercent1(0);
    handlePercent2(0);
  };
  return <button onClick={handleReset}>Reset</button>;
};

export default Button;
