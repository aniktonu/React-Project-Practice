import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    count: 0
  };

  Increment = (props) => {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
  };

  Decrement = (props) => {
    if (this.state.count === 0) {
      this.setState({
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>
          {" "}
          <u>Increment & Decrement in React</u>
          <h1>{this.state.count}</h1>
          <button onClick={this.Increment}>Increment</button>
          <button onClick={this.Decrement}>Decrement</button>
        </h1>
      </div>
    );
  }
}

export default App;
