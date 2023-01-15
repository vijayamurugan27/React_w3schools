import { useState } from "react";

function UseSt() {
    const [color, setColor] = useState("Red");

    return <>
    <h1>My favorite color is {color}!</h1>
    <button type="button" onClick={()=> setColor("Blue")}>Blue</button>
    </>
  }


export default UseSt;