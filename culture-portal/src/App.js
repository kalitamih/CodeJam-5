import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Writers from "./components/Writers";
import Writer from "./components/Writer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StartPage: true,
      WritersPage: false,
      WriterPage: false
    };
  }
  ChangePage = () => {
    this.setState({
      StartPage: !this.state.StartPage,
      WritersPage: !this.state.WritersPage
    });
  };

  GoToWriterPage = () => {
    this.setState({
      WriterPage: !this.state.WriterPage,
      WritersPage: !this.state.WritersPage
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.StartPage && <Landing ChangePage={this.ChangePage} />}
        {this.state.WritersPage && (
          <Writers GoToWriterPage={this.GoToWriterPage} />
        )}
        {this.state.WriterPage && (
          <Writer BackToWriters={this.GoToWriterPage} />
        )}
      </div>
    );
  }
}

export default App;
