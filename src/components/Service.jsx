import React from "react";

const Service = ({ tip, handleTip }) => {
  return (
    <div>
      <span>How did you like the Service ? </span>
      <select value={tip} onChange={(e) => handleTip(e.target.value)}>
        <option>Dissatisfied (0%)</option>
        <option>It was ok (5%)</option>
        <option>It was good (10%)</option>
        <option>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
};

export default Service;
