import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNowPlaying } from "../../actions/nowPlaying";
import { searchMovie } from "../../actions/search";
// css
import "./NowPlaying.css";
class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      search: ""
    };
  }

  componentDidMount = () => {
    this.props.getNowPlaying();
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.now_playing !== this.props.now_playing) {
      this.setState({ loading: false });
    }
  }

  handleInput = e => {
    this.setState({ search: e.target.value });
  };
  handleSubmit = () => {
    this.props.searchMovie(this.state.search);
    this.props.history.push(`/search/${this.state.search}`);
    this.setState({ search: "" });
  };
  render() {
    const api_key = process.env.REACT_APP_API_KEY;
    const urlBase = `https://image.tmdb.org/t/p/w500`;

    if (this.state.loading === true) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          <Link to="/popular">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleInput}
            placeholder="Search for a movie"
          />
          <button onClick={this.handleSubmit}>Search </button>
          <h1>Now Playing</h1>
          {this.props.now_playing.results.map((movie, i) => {
            return (
              <Link
                to={`/now-playing/${i}`}
                className="movie-details"
                key={movie + i}
              >
                <h3>Title: {movie.title}</h3>
                <h5>
                  {`Vote Average: ${movie.vote_average} out of ${
                    movie.vote_count
                  }
                  votes`}
                </h5>
                <img src={`${urlBase + movie.poster_path}`} />
              </Link>
            );
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    now_playing: state.now_playing
  };
};

export default connect(
  mapStateToProps,
  { getNowPlaying, searchMovie }
)(NowPlaying);
