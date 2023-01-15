import React from "react";


function MissedGoal() {
    return <h1>MISSED!</h1>;
  }
  
  function MadeGoal() {
    return <h1>Goal!</h1>;
  }

  function Ifcon(){
    return(
    <>
      <MissedGoal></MissedGoal>
      <MadeGoal></MadeGoal>
      </>
    )
  }

  export default Ifcon;