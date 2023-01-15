import React from "react";

function Car(props) {
    return <h2>I am a { props.brand.name } Car. and my model is {props.brand.model}!</h2>;
  }
  
  function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
        <h1>Passing an object as a props.</h1>
        <Car brand={ carInfo } />
      </>
    );
  }

  function Ex4(){
    return (<Garage></Garage>)
  }

  export default Ex4;