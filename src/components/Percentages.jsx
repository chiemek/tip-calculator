import React from "react";

const Percentages = ({ text, percent, handlePercent }) => {
  return (
    <div>
      <span>{text}</span>
      <select value={percent} onChange={(e) => handlePercent(e.target.value)}>
        <option value="0">Dissatisfied (0%) </option>
        <option value="5">It was Ok (5%) </option>
        <option value="10">It was Good (10%) </option>
        <option value="20">Absolutely Amazing (20%) </option>
      </select>
    </div>
  );
};

export default Percentages;
