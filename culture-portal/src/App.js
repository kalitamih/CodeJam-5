import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Writers from "./components/Writers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StartPage: true,
      WritersPage: false
    };
  }
  ChangePage = () => {
    this.setState({
      StartPage: !this.state.StartPage,
      WritersPage: !this.state.WritersPage
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.StartPage && <Landing ChangePage={this.ChangePage} />}
        {this.state.WritersPage && <Writers />}
      </div>
    );
  }
}

export default App;
