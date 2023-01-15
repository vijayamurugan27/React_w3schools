import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

function UseSt2(){
    return (
<>
<h1>
    This is from file 3.
    <Car></Car>
</h1>
</>
    )
}

export default UseSt2;