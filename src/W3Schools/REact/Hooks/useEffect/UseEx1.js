import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}


function UseEx1(){
    return(<>
    <h1>This one is from using UseEffect with an empty array.</h1>
    <Timer></Timer>
    </>)
}

export default UseEx1;