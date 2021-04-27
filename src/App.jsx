import React, { useState, useEffect } from "react";
import axios from "axios";

import ListComponent from "./listComponent";

const App = () => {
  //hooks
  const [data, setData] = useState({});
  const [selections, setSelections] = useState([]);
  const [itemSelected, setItemSelected] =useState(null)


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

  const handleSelection = (event) => {
    console.log('clicking')
    
  }

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
            items={selections}
            handleSelection={handleSelection}
          />
        </div>
        <div className="col2">
          <ListComponent
            title={"Items"}
            items={[]}
            nextCategory={"options"}
          />
        </div>
        <div className="col3">
          <ListComponent
            title={"Item Options"}
            items={[]}
            nextCategory={"choices"}
          />
        </div>
        <div className="col4">
          <ListComponent title={"Option Choices"} items={[]} />
        </div>
      </div>
    </div>
  );
};

export default App;
