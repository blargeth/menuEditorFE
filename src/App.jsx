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

  const [indexTracker, setIndexTracker] = useState({
    s: 0,
    i: 0,
    o: 0,
    c: 0
  });

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
      setIndexTracker({
        s: listNumber,
        i: 0,
        o: 0,
        c: 0
      })
      setOptionsSelected([])
      setChoicesSelected([])
    }

    if (columnName === "items") {
      setIndexTracker(prevState => {return {...prevState, i: listNumber}})
      let selectedOptions = data.sections[indexTracker.s].items[listNumber].options.map((option) => option.name);
      setOptionsSelected(selectedOptions);
      setChoicesSelected([])
    }

    if (columnName === "options") {
      let selectedChoices = data.sections[indexTracker.s].items[indexTracker.i].options[listNumber].choices.map((item) => item.name);
      setChoicesSelected(selectedChoices);
      setIndexTracker(prevState => {return {...prevState, o: listNumber}})
    }

    if (columnName === "choices") {
      setIndexTracker(prevState => {return {...prevState, c: listNumber}});
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
            indexTracker={indexTracker.s}
          />
        </div>
        <div className="col2">
          <ListComponent
            title={"Items"}
            columnName={"items"}
            items={items}
            nextCategory={"options"}
            handleSelection={handleSelection}
            indexTracker={indexTracker.i}
          />
        </div>
        <div className="col3">
          <ListComponent
            title={"Item Options"}
            columnName={"options"}
            items={options}
            handleSelection={handleSelection}
            indexTracker={indexTracker.o}
          />
        </div>
        <div className="col4">
          <ListComponent
            title={"Option Choices"}
            columnName={"choices"}
            items={choices}
            handleSelection={handleSelection}
            indexTracker={indexTracker.c}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
