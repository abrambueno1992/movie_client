import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchMovie } from "../../actions/search";
import Navigation from "../navigation/Navigation";
// css
import "./Search.css";
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
    const query = this.props.match.url.split("/")[2];
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
          <Navigation value={0} history={this.props} />
          {this.props.search.results.map((movie, i) => {
            return (
              <Link
                to={`/search/${query}/result/${i}`}
                className="movie-details-search"
                key={movie + i}
              >
                <img src={`${urlBase + movie.poster_path}`} />
                <div>
                  <h2 className="meta-details-search">Title: {movie.title}</h2>
                  <div className="meta-details-search">Summary:</div>
                  <div className="overview-search">{movie.overview}</div>
                </div>
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
