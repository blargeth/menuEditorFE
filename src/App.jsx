import React, { useState } from "react";

import ListComponent from './listComponent';

const App = () => {
  return (
    <div className="menuEditor">
      <h1>Menu Editor Component</h1>
      <div className="tableComponent">
        <div className="col1">
          <ListComponent/>
        </div>
        <div className="col2">
          hi
        </div>
        <div className="col3">
          awef
        </div>
        <div className="col4">
          awef
        </div>
      </div>
    </div>
  );
};

export default App;
