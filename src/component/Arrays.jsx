import React from "react";

function Arrays() {
  const muka = [
    { id: 4, name: "marko" },
    { id: 3, name: "eric" },
    { id: 6, name: "thunder" },
  ];
  return (
    <ol>
      {muka.filter((items, index) => {
        return !items.id === 3 ? <li>{items}</li> : null;
      })}
    </ol>
  );
}

export default Arrays;
