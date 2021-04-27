import React, { useState } from "react";

const ListComponent = (props) => {
    console.log(props)
  return (
      <div>
        <div className="menuTitle table">
        {props.title}
        <button>Add</button>
        </div>
        <div className="table"> test</div>
    </div>
  );
};

export default ListComponent;
