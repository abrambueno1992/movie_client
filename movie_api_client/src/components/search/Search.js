import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchMovie } from "../../actions/search";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (this.props.search === null) {
      const query = this.props.match.url.split("/")[2];
      this.props.searchMovie(query);
    } else {
      console.log("Search data is ready");
    }
  }

  render() {
    const api_key = process.env.REACT_APP_API_KEY;
    const urlBase = `https://image.tmdb.org/t/p/w500`;
    if (this.props.search === null) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Search component</h3>
          {this.props.search.results.map((movie, i) => {
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
                <img
                  style={{ width: "50%", height: "50%" }}
                  src={`${urlBase + movie.poster_path}`}
                />
                <div>Summary:</div>
                <div>{movie.overview}</div>
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
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  { searchMovie }
)(Search);
