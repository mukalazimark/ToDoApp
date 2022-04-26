import React, { useState } from "react";

function ToDo() {
  const [toDoItem, setToDo] = useState([]);
  const [inputText, setInput] = useState("");
  function addItem(event) {
    setToDo((prevValue) => {
      return [...prevValue, inputText];
    });
    event.preventDefault();
  }
  function changed(event) {
    const userInput = event.target.value;
    setInput(userInput);
  }
  function itemClicked() {
    window.alert("item clicked");
  }
  return (
    <div>
      <h1>My To DO Items</h1>
      <input
        type="text"
        onChange={changed}
        value={inputText}
        id=""
        placeholder="Enter Item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {toDoItem.map((item) => {
          return <li onClick={itemClicked}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default ToDo;
