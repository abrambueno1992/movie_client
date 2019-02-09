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
    const api_key = process.env.REACT_APP_API_KEY;
    const urlBase = `https://image.tmdb.org/t/p/original`;
    const urlBaseBackdrop = `https://image.tmdb.org/t/p/original`;
    console.log("PROPS of NOWPLYaying:", parseInt(movie_index, 10));
    if (this.state.selection === "") {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Display selection</h1>
          {this.state.selection.results.map((movie, i) => {
            return (
              <div key={movie + i}>
                <h3>Title: {movie.title}</h3>
                <img src={`${urlBase + movie.poster_path}`} />
                <img src={`${urlBaseBackdrop + movie.backdrop_path}`} />
                <div>Summary:</div>
                <h4>{movie.overview}</h4>
                <h5>Popularity: {movie.popularity}</h5>
                <h5>
                  Vote Average: {movie.vote_average} out of {movie.vote_count}{" "}
                  votes
                </h5>
                <h5>Release Date: {movie.release_date}</h5>
              </div>
            );
          })}
        </div>
      );
    }
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
