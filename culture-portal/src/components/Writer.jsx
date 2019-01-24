import React, { Component } from "react";
import Navigation from "./Navigation";
import { Button } from "reactstrap";

class Writer extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navigation />
        <p>
          Здесь после нажатия на кнопку генерится (каким-то чудом) вся инфа об
          Авторе
        </p>
        <Button onClick={this.props.BackToWriters}>Назад</Button>
      </div>
    );
  }
}

export default Writer;
