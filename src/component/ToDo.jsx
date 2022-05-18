import React, { useState } from "react";

function ToDo() {
  const [toDoItem, setToDo] = useState([]);
  const [inputText, setInput] = useState("");
  function addItem(event) {
    // adding userinput to the list
    setToDo((prevValue) => {
      return [...prevValue, inputText];
    });
    setInput("");
    event.preventDefault();
  }
  // getting user input
  function changed(event) {
    const userInput = event.target.value;
    setInput(userInput);
  }
  // deleting selected item
  function itemClicked(e) {
    e.preventDefault();
    let toDoName = e.target.getAttribute("itemName");
    setToDo(
      toDoItem.filter((removeItem) => {
        return removeItem !== toDoName;
      })
    );
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
          return (
            <div>
              <li>
                {item} &nbsp;&nbsp;
                <button
                  className="btn btn-primary"
                  onClick={itemClicked}
                  itemName={item}
                >
                  X
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDo;
