import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  const [first, setFirst] = useState("Hello");
  const [last, setLast] = useState("World");

  const handleFristClick = () => {
    setFirst(inputRef.current.value);
    inputRef.current.value = "";
  };
  const handleLastClick = () => {
    setLast(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="app">
      <input type="text" id="message" name="message" ref={inputRef} />
      <div className="app__btns">
        <button onClick={handleFristClick}>First Name</button>
        <button onClick={handleLastClick}>Last Name</button>
      </div>
      <table width="100%" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
        <th>First Name: {first}</th>
        <th>Last Name: {last}</th>
      </table>
    </div>
  );
}

export default App;
