import React, {useState} from "react";


function MyForm() {
    const [textarea, setTextarea] = useState("Enter the value.");
  
    const handleChange = (event) => {setTextarea(event.target.value); }
    const text1 = setTextarea
    
    return (
      <form >
        <textarea value={textarea} onChange={handleChange} />
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
function Forms4(){
    return(
        <>
        <h2>Fourth forms</h2>
        <textarea></textarea><br></br><br></br>
        This is from the Form.<br></br><br></br>
        <MyForm></MyForm>
        </>
    )
}

export default Forms4;