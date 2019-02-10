import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopRated } from "../../actions/topRated";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
// css
import "./TopRated.css";
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
    const urlBase = `https://image.tmdb.org/t/p/w500`;
    if (this.state.loading === true) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <Navigation value={3} history={this.props} />
          {this.props.top_rated.results.map((movie, i) => {
            return (
              <Link
                to={`/top-rated/${i}`}
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
    top_rated: state.top_rated
  };
};
export default connect(
  mapStateToProps,
  { getTopRated }
)(TopRated);
