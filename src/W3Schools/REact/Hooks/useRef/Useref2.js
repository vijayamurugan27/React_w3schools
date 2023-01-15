// import { useRef } from "react";

// function Useref2() {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

// export default Useref2;

// const { useRef } = React;
import { useRef } from "react";

const Useref2 = () => {
  const nameRef = useRef();
  
  const focus = () => {
    nameRef.current.focus();
  }
  
  const blur = () => {
    nameRef.current.blur();
  }
  
  return (
    <section className="box">
      <label for="name">Enter a name:</label>
      <input ref={nameRef} type="text" name="name" id="name"/>
      <button onClick={focus}>Focus!</button>
      <button onClick={blur}>Remove Focus</button>
    </section>
  );
}

export default Useref2;
