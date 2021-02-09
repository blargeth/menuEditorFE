import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount : 5,
    }
  }

  render() {

    return (
      <>
        <h1>
          Hello !!!
        </h1>
      </>
    );
  }
}

export default App;