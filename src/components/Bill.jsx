const Bill = ({ bill, handleBill }) => {
  return (
    <div>
      <span>How Much was the bill ? </span>
      <input
        type="text"
        value={bill}
        onChange={(e) => handleBill(e.target.value)}
      />
    </div>
  );
};

export default Bill;
