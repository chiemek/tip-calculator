import React from "react";

const Friend = () => {
  return (
    <div>
      <span>How did your Friend like the Service ? </span>
      <select>
        <option>Dissatisfied (0%)</option>
        <option>It was ok (5%)</option>
        <option>It was good (10%)</option>
        <option>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
};

export default Friend;
