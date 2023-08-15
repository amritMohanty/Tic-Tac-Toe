import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  // Here, the method is said to be "moving the state up"
  // each square componenet has its own independant state value

  const clickHandler = () => {
    setValue("X");
  };

  return (
    <button className="square" onClick={clickHandler}>
      {value}
    </button>
  );
} //props is an JSON object

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
