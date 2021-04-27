import React, { useState, useEffect } from "react";
import axios from "axios";

import ListComponent from './listComponent';

const App = () => {

  //hooks
  const [data, setData] = useState({});

  const getData = () => {
    axios
    .get(`/menuTest`)
    .then((results) => {
      setData(results.data);
      return;
    })
    .catch((err) => console.log(err, 'you have an error'));
};

  //useEffect hook to initialize data from API endpoint
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="menuEditor">
      <h1>Menu Editor Component</h1>
      <div className="tableComponent">
        <div className="col1">
          <ListComponent title={"Menu Selection"} items={data.sections} currCategory={"sections"} nextCategory={"items"}/>
        </div>
        <div className="col2">
          <ListComponent title={"Items"} items={data.sections?.items} nextCategory={"options"}/>
        </div>
        {/* <div className="col3">
          <ListComponent title={"Item Options"} items={data.sections.items.options} nextCategory={"choices"}/>
        </div>
        <div className="col4">
          <ListComponent title={"Option Choices"} items={data.sections.items.options}/>
        </div> */}
      </div>
    </div>
  );
};

export default App;
