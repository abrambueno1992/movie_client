import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopRated } from "../../actions/topRated";
import { getNowPlaying } from "../../actions/nowPlaying";
import { getPopular } from "../../actions/popular";
import { Link } from "react-router-dom";

class DisplaySelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      selection: ""
    };
  }

  componentDidMount() {
    // console.log("history prop", this.props.match.url.split("/"));
    const path = this.props.match.url.split("/")[1];
    if (path === "popular") {
      if (this.props.popular !== null) {
        this.setState({ selection: this.props.popular });
      } else {
        this.props.getPopular();
      }
    } else if (path === "top-rated") {
      if (this.props.top_rated !== null) {
        this.setState({ selection: this.props.top_rated });
      } else {
        this.props.getTopRated();
      }
    } else {
      if (this.props.now_playing !== null) {
        this.setState({ selection: this.props.now_playing });
      } else {
        this.props.getNowPlaying();
      }
    }
    console.log("Path: ", path);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.popular !== this.props.popular) {
      this.setState({ selection: this.props.popular });
    }
    if (prevProps.top_rated !== this.props.top_rated) {
      this.setState({ selection: this.props.top_rated });
    }
    if (prevProps.now_playing !== this.props.now_playing) {
      this.setState({ selection: this.props.top_rated });
    }
  }

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
  return {
    popular: state.popular,
    top_rated: state.top_rated,
    now_playing: state.now_playing
  };
};
export default connect(
  mapStateToProps,
  { getNowPlaying, getTopRated, getPopular }
)(DisplaySelection);
