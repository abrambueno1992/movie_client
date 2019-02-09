import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNowPlaying } from "../../actions/nowPlaying";
// css
import "./NowPlaying.css";
class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: []
    };
  }

  componentDidMount = () => {
    this.props.getNowPlaying();
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.now_playing !== this.props.now_playing) {
      this.props.now_playing.results.forEach((movie, i) => {
        // this.setState({})
        console.log("movie", movie);
      });
      this.setState({ loading: false });
    }
  }

  render() {
    const api_key = process.env.REACT_APP_API_KEY;
    const urlBase = `https://image.tmdb.org/t/p/original`;
    const urlBaseBackdrop = `https://image.tmdb.org/t/p/original`;
    console.log("Movies Now Playing: ", this.props.now_playing);
    if (this.state.loading === true) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          <Link to="/popular">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          <h1>Now Playing</h1>
          {this.props.now_playing.results.map((movie, i) => {
            console.log(
              "Inside, movie title:",
              movie.original_title,
              `${urlBase + movie.poster_path}`
            );

            return (
              <div className="movie-details" key={movie + i}>
                <h3>Title: {movie.original_title}</h3>
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
    now_playing: state.now_playing
  };
};

export default connect(
  mapStateToProps,
  { getNowPlaying }
)(NowPlaying);
