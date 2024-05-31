import { CounterProps } from "./ParentComponent";

const ChildComponent = ({ handleMinus, handlePlus, counter }: CounterProps) => {
  return (
    <div className="mt-12">
      <h1 className="text-center mb-4 text-4xl">{counter}</h1>
      <button className="px-5 mx-2 border border-black" onClick={handleMinus}>
        -
      </button>
      <button className="px-5 mx-2 border border-black" onClick={handlePlus}>
        +
      </button>
    </div>
  );
};

export default ChildComponent;
