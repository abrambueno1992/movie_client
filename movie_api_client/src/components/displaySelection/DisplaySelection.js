import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopRated } from "../../actions/topRated";
import { getNowPlaying } from "../../actions/nowPlaying";
import { getPopular } from "../../actions/popular";
import { searchMovie } from "../../actions/search";
import { Link, withRouter } from "react-router-dom";

import Navigation from "../navigation/Navigation";
import "./DisplaySelection.css";
class DisplaySelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      selection: ""
    };
  }

  componentDidMount() {
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
    } else if (path === "search") {
      if (this.props.search !== null) {
        this.setState({ selection: this.props.search });
      } else {
        const query = this.props.match.url.split("/")[2];
        this.props.searchMovie(query);
      }
    } else {
      if (this.props.now_playing !== null) {
        this.setState({ selection: this.props.now_playing });
      } else {
        this.props.getNowPlaying();
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.popular !== this.props.popular) {
      this.setState({ selection: this.props.popular });
    }
    if (prevProps.top_rated !== this.props.top_rated) {
      this.setState({ selection: this.props.top_rated });
    }
    if (prevProps.now_playing !== this.props.now_playing) {
      this.setState({ selection: this.props.now_playing });
    }
    if (prevProps.search !== this.props.search) {
      this.setState({ selection: this.props.search });
    }
  }

  render() {
    const index = this.props.match.url.split("/")[
      this.props.match.url.split("/").length - 1
    ];
    const movie_index = parseInt(index, 10);
    const urlBaseBackdrop = `https://image.tmdb.org/t/p/w1280`;
    if (this.state.selection === "") {
      return (
        <div className="display-selection">
          <h3>Loading...</h3>
        </div>
      );
    } else {
      const movie = this.state.selection.results[movie_index];
      return (
        <div className="display-selection">
          <Navigation history={this.props} />
          {/* <h1>Display selection</h1> */}

          <h1 className="meta-details">{movie.title}</h1>
          <img
            className="img-display"
            src={`${urlBaseBackdrop + movie.backdrop_path}`}
          />
          <h2 className="meta-details">Summary:</h2>
          <div className="overview">{movie.overview}</div>
          <div className="meta-details">Popularity: {movie.popularity}</div>
          <div className="meta-details">
            Vote Average: {movie.vote_average} out of {movie.vote_count} votes
          </div>
          <div className="meta-details">Release Date: {movie.release_date}</div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    popular: state.popular,
    top_rated: state.top_rated,
    now_playing: state.now_playing,
    search: state.search
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { getNowPlaying, getTopRated, getPopular, searchMovie }
  )(DisplaySelection)
);
