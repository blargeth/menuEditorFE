import React from "react";

const ListComponent = (props) => {

  let c = 0;
  return (
    <div>
      <div className="menuTitle table">
        {props.title}
        <button className="addButton">Add</button>
      </div>
      <div>
        {props.items.map((item, i) => {
          c += 1;
          let selectedItemClass = (props.indexTracker === i) ? "table selected": "table"
          return (
            <div className={selectedItemClass}
              onClick={(e) => {
                props.handleSelection(e, props.columnName, i);
              }}
              key={c}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListComponent;
