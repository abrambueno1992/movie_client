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
    const urlBase = `https://image.tmdb.org/t/p/w500`;
    const urlBaseBackdrop = `https://image.tmdb.org/t/p/original`;
    if (this.state.loading === true) {
      console.log("PROPS of NOWPLYaying:", this.props.match.path.split("/"));
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
              <Link
                to={`/popular/${i}`}
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
    popular: state.popular
  };
};

export default connect(
  mapStateToProps,
  { getPopular }
)(Popular);
