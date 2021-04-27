import React, { useState } from "react";

const ListComponent = (props) => {
  console.log(props);
  return (
    <div>
      <div className="menuTitle table">
        {props.title}
        <button>Add</button>
      </div>
      <div className="table">
        {props[props.nextCategory] === undefined ? (
          <div> **No items** </div>
        ) : (
          props[props.nextCategory].map((item) => {
            return <div>{item.name}</div>;
          })
        )}
      </div>
    </div>
  );
};

export default ListComponent;
