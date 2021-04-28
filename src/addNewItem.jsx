import React from "react";

const AddNewItem = (props) => {
  let { category, handleOnChange, handleOnClose, handleNewTableInput } = props;

  return (
    <div>
      <h3>add your new {category} here</h3>
      <input
        placeholder="add your thing"
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
      ></input>
      <button onClick={handleNewTableInput}>add</button>
      <button onClick={handleOnClose}>close</button>
    </div>
  );
};

export default AddNewItem;
