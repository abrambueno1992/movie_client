import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopRated } from "../../actions/topRated";
import { Link } from "react-router-dom";

class TopRated extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    this.props.getTopRated();
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.top_rated !== this.props.top_rated) {
      this.setState({ loading: false });
    }
  }

  render() {
    const api_key = process.env.REACT_APP_API_KEY;
    const urlBase = `https://image.tmdb.org/t/p/original`;
    const urlBaseBackdrop = `https://image.tmdb.org/t/p/original`;
    console.log("Top Rated Movies:", this.props.top_rated);
    if (this.state.loading === true) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/popular">Popular</Link>
          <Link to="/">Now Playing</Link>
          <h1>Top Rated</h1>
          {this.props.top_rated.results.map((movie, i) => {
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
    top_rated: state.top_rated
  };
};
export default connect(
  mapStateToProps,
  { getTopRated }
)(TopRated);
