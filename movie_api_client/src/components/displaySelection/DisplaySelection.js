import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopRated } from "../../actions/topRated";
import { getNowPlaying } from "../../actions/nowPlaying";
import { getPopular } from "../../actions/popular";
import { Link } from "react-router-dom";

class DisplaySelection extends Component {
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
const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  { getNowPlaying, getTopRated, getPopular }
)(DisplaySelection);
