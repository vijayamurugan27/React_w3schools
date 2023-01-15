import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
            
      <Component2 />
            <div>
                <button onClick={()=>setUser("Pavithra.")} value = "Submit"  >Click here.</button>
            </div>
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

function UseCon1 (){
    return (
        <>
        <h1>
            This is full use context using hooks like useState, useContext, createContext.
            <Component1></Component1>
            
        </h1>
        </>
    )
}

export default UseCon1;

