import React, {useState} from "react";

function Forms3() {
    const [inputs, setInputs] = useState({});  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs.age);
        console.log(inputs)
        console.log(inputs.age)
        console.log(inputs.username)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
            <label>
                Enter your name : <input type="text" name="username" 
                value={inputs.username || ""} onChange={handleChange}/>
            </label>
        </div><br></br>
        <div>
            <label>Enter your age : <input type="number" name="age" 
            value={inputs.age || ""} onChange={handleChange} />
            </label>
        </div><br></br>
            <input type="submit" value={"Submit"}/>
      </form>
    )
  }
  

export default Forms3;