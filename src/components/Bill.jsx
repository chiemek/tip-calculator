import React from "react";

const Bill = ({ bill, handleBill }) => {
  return (
    <div>
      <span>How Much is the Bill ? </span>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => handleBill(+e.target.value)}
      />
    </div>
  );
};

export default Bill;
