import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

function UseEx(){
    return (<>
    <h1>This is from Use Effect with no dependency passed.</h1>
    <Timer></Timer>
    </>)
}


export default UseEx;