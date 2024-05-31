import { useState } from "react";
import ChildComponent from "./ChildComponent";

export interface CounterProps {
  counter: number;
  handleMinus: () => void;
  handlePlus: () => void;
}
const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleMinus = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const handlePlus = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <ChildComponent
        handleMinus={handleMinus}
        handlePlus={handlePlus}
        counter={counter}
      />
    </div>
  );
};

export default ParentComponent;
