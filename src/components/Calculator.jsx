import React, { useState } from "react";
import Bill from "./Bill";
import Percentages from "./Percentages";
import Message from "./Message";
import Button from "./Button";

const Calculator = () => {
  const [bill, setBill] = useState("");
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);

  const tip = (bill * (Number(percent1) + Number(percent2))) / 2 / 100;
  console.log(tip, percent1, percent2);

  return (
    <div>
      <Bill bill={bill} handleBill={setBill} />
      <Percentages
        text="How much did you like the service ? "
        percent={percent1}
        handlePercent={setPercent1}
      />
      <Percentages
        text="How much did your friend like the service ? "
        percent={percent2}
        handlePercent={setPercent2}
      />
      <Message bill={bill} tip={tip} />
      {bill >= 1 && (
        <Button
          handleBill={setBill}
          handlePercent1={setPercent1}
          handlePercent2={setPercent2}
        />
      )}
    </div>
  );
};

export default Calculator;
