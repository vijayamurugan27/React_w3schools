import react from 'react';

function Car(props) {
    return <>
    <h2>I am a { props.brand }!</h2>
    {/* <h5>From the Model{props.model}</h5> */}
    </>;
  }
  
function Garage() {
    const carName = "Ford";
    // const carModel = "Mustang";
    return (
      <>
        <h1>Passing a variable as props.</h1>
        <Car brand={ carName } />
        {/* <Car model = {carModel}></Car> */}
      </>
    );
  }

function Ex3(){
    return <Garage></Garage>
}

export default Ex3;