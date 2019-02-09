import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNowPlaying } from "../../actions/nowPlaying";
class NowPlaying extends Component {
  render() {
    return (
      <div>
        <Link to="/popular">Popular</Link>
        <Link to="top-rated">Top Rated</Link>
        <h1>Now Playing</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(NowPlaying);
