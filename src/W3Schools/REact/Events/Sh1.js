import React from 'react'

function Sh1(){
    const shoot = ()=>{
        alert("Great Shot"); 
    }
    return (<button onClick={shoot}>Take the shot</button>);

}

export default Sh1