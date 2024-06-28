import "./App.css";
import Bill from "./components/Bill";
import Service from "./components/Service";
import Friend from "./components/Friend";
import Message from "./components/Message";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState("");

  return (
    <div className="App">
      <Bill bill={bill} handleBill={setBill} />
      <Service tip={tip} handleTip={setTip} />
      <Friend />
      <Message bill={bill} />
      <Button />
    </div>
  );
}

export default App;
