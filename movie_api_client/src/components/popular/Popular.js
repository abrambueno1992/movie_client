import React, { Component } from "react";
import { connect } from "react-redux";
import { getPopular } from "../../actions/popular";
import { Link, withRouter } from "react-router-dom";

import Navigation from "../navigation/Navigation";
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
      return (
        <div className="testingPopular">
          <h1>Loading... </h1>
        </div>
      );
    } else {
      return (
        <div>
          <Navigation value={2} history={this.props} />
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

export default withRouter(
  connect(
    mapStateToProps,
    { getPopular }
  )(Popular)
);
