import React from "react";

function Sh3() {
    const shoot = (a, b) => {
      alert(b.type);
    }
  
    return (
      <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    );
  }


  export default Sh3;