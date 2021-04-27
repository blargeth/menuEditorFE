import React from "react";

const ListComponent = (props) => {

  let c = 0;
  return (
    <div>
      <div className="menuTitle table">
        {props.title}
        <button>Add</button>
      </div>
      <div>
        {props.items.map((item, i) => {
          c += 1;
          return (
            <div className="table"
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
