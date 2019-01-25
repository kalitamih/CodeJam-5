import React, { Component } from "react";
import Navigation from "./Navigation";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navigation ChangePage={this.props.ChangePage} />
        <div className="about">
          Information about 'Culture Portal': Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Vel placeat, pariatur aliquid laborum
          expedita quo odit eveniet ullam deserunt necessitatibus deleniti
          repellat voluptatum ut sapiente cum labore eos, qui tempore. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Vel placeat,
          pariatur aliquid laborum expedita quo odit eveniet ullam deserunt
          necessitatibus deleniti repellat voluptatum ut sapiente cum labore
          eos, qui tempore.
        </div>
        <div className="random_author">
          <h3>Author of the day</h3>
        </div>
      </div>
    );
  }
}

export default Landing;
