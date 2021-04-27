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
          <ListComponent title={"Menu Selection"} items={data.sections}/>
        </div>
        <div className="col2">
          <ListComponent title={"Items"}/>
        </div>
        <div className="col3">
          <ListComponent title={"Item Options"}/>
        </div>
        <div className="col4">
          <ListComponent title={"Option Choices"}/>
        </div>
      </div>
    </div>
  );
};

export default App;
