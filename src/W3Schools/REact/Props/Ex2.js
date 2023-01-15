import React from "react";

function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
function Ex2() {
    return (
      <>
      Simple props with passing data from component to component.
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
  }

export default Ex2;