import React, { useState } from "react";

const ListComponent = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="menuTitle">
            title from props
            <button>Add</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>testing</tr>
        <tr>testing</tr>
        <tr>testing</tr>
      </tbody>
    </table>
  );
};

export default ListComponent;
