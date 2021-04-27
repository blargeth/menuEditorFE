import React, { useState, useEffect } from "react";
import axios from "axios";

import ListComponent from "./listComponent";

const App = () => {
  //hooks
  const [data, setData] = useState({});
  const [selections, setSelections] = useState([]);
  const [items, setItemsSelected] = useState([]);
  const [options, setOptionsSelected] = useState([]);
  const [choices, setChoicesSelected] = useState([]);

  //helpers
  const getData = () => {
    axios
      .get(`/menuTest`)
      .then((results) => {
        setData(results.data);
        let selectionNames = results.data.sections.map((item) => item.name);
        setSelections(selectionNames);
        return;
      })
      .catch((err) => console.log(err, "you have an error"));
  };

  const handleSelection = (event, columnName, listNumber) => {
    console.log("clicking", columnName, listNumber);
    
    if (columnName === "selections") {
      let selectedItems = data.sections[listNumber].items.map((item) => item.title);
      setItemsSelected(selectedItems);
    }

  };

  //useEffect hook to initialize data from API endpoint
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="menuEditor">
      <h1>Menu Editor Component</h1>

      <div className="tableComponent">
        <div className="col1">
          <ListComponent
            title={"Menu Selection"}
            columnName={"selections"}
            items={selections}
            handleSelection={handleSelection}
          />
        </div>
        <div className="col2">
          <ListComponent
            title={"Items"}
            columnName={"items"}
            items={items}
            nextCategory={"options"}
            handleSelection={handleSelection}
          />
        </div>
        <div className="col3">
          <ListComponent
            title={"Item Options"}
            columnName={"options"}
            items={options}
            handleSelection={handleSelection}
          />
        </div>
        <div className="col4">
          <ListComponent
            title={"Option Choices"}
            columnName={"choices"}
            items={choices}
            handleSelection={handleSelection}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
