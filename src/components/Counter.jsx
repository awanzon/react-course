import { useState } from "react";
let intialArray = [];
function Counter() {
  const [array, setArray] = useState(intialArray);

  return (
    <div>
      <h1>{array.toString()}</h1>
      <button
        onClick={() => {
          setArray((prevArray) => [...prevArray, "+1"]);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setArray((prevArray) => [...prevArray, "-1"]);
        }}
      >
        Decrement
      </button>
      <button onClick={() => setArray(intialArray)}>Reset</button>
    </div>
  );
}

export default Counter;
