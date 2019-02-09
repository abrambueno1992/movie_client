import React, { Component } from "react";

export default class DisplaySelection extends Component {
  render() {
    const movie_index = this.props.match.url.split("/")[
      this.props.match.url.split("/").length - 1
    ];
    console.log("PROPS of NOWPLYaying:", parseInt(movie_index, 10));
    return (
      <div>
        <h1>Display selection</h1>
      </div>
    );
  }
}
