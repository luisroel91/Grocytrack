import React from "react";

const ItemDataTable = ({ currentList }) => (
  <ul>
    {currentList.map(element => (
      <li key={element.id}>{element.name}</li>
    ))}
  </ul>
);

export default ItemDataTable;
