import React from "react";
const Message = ({ bill, tip }) => {
  return (
    <div>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </div>
  );
};

export default Message;
