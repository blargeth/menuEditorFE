import React from "react";

const ListComponent = (props) => {
  console.log(props);
  let c = 0;
  return (
    <div>
      <div className="menuTitle table">
        {props.title}
        <button>Add</button>
      </div>
      <div className="table">
        {
          props.items.map((item) => {
            c += 1;
            return (
              <div className={"table"} onClick={(e) => {props.handleSelection(e)}} key={c}>
                {item}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ListComponent;
