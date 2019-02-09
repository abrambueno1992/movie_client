import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNowPlaying } from "../../actions/nowPlaying";
class NowPlaying extends Component {
  componentDidMount = () => {
    this.props.getNowPlaying();
  };

  render() {
    console.log("Movies Now Playing: ", this.props.now_playing);

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
  return {
    now_playing: state.now_playing
  };
};

export default connect(
  mapStateToProps,
  { getNowPlaying }
)(NowPlaying);
