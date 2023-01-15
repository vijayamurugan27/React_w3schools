import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");
    // handleClick = {=>()}
    
  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
      {/* <button  type = "submit" value="Submit" onClick={()=> alert(" You have Clicked.")}>Clickme</button> */}
      <button  type = "submit" value="Submit" onClick={() => setUser("Rahul")}>Clickme</button>
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}


function UseCon (){
    return (<>
    <h1>
        This is from Use Context Hook Example.
        <Component1></Component1>
    </h1>
    </>)
}


export default UseCon;
