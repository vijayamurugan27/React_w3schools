import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  }

  function UseEx2(){
    return (<>
    <hr></hr>
    <h1>This is from USeEffect passing useSate in use effect.</h1>
    <Counter></Counter>
    </>)
  }

  export default UseEx2;