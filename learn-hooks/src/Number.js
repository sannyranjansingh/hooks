import React, { useEffect, useState } from "react";

function Number() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect(()=>{
    console.log("useEffect call");
  },[count]);

  return (
    <>
      <h1>
        Hey,please click on button to play the game increment and decrement
      </h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Number;
