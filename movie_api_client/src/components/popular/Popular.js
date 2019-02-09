import React, { Component } from "react";
import { connect } from "react-redux";
import { getPopular } from "../../actions/popular";
import { Link } from "react-router-dom";
class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.getPopular();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.popular !== this.props.popular) {
      this.setState({ loading: false });
    }
  }

  render() {
    const api_key = process.env.REACT_APP_API_KEY;
    const urlBase = `https://image.tmdb.org/t/p/original`;
    const urlBaseBackdrop = `https://image.tmdb.org/t/p/original`;
    if (this.state.loading === true) {
      return (
        <div>
          <h1>Loading... </h1>
        </div>
      );
    } else {
      console.log("Popular Movies: ", this.props.popular.results);
      this.props.popular.results.forEach(element => {
        console.log("each", element);
      });
      return (
        <div>
          <Link to="/">Now Playing</Link>
          <Link to="top-rated">Top Rated</Link>
          <h1>Popular </h1>
          {this.props.popular.results.map((movie, i) => {
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
    popular: state.popular
  };
};

export default connect(
  mapStateToProps,
  { getPopular }
)(Popular);
