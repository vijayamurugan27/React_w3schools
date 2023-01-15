import React, {useState} from "react";

function MyForm() {
    const [myCar, setMyCar] = useState("Daewoo");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
          <option value="Suzuki">Suzuki</option>
          <option value="Daewoo">Daewoo</option>
          <option value="Benz">Benz</option>
        </select>
      </form>
    )
  }
  

function DropDown(){
    return(
        <h2>Fifth forms
            <MyForm></MyForm>
        </h2>
    )
}

export default DropDown;