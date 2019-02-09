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
    console.log("Movies Now Playing: ", this.props.now_playing);
    if (this.state.loading === true) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          <Link to="/popular">Popular</Link>
          <Link to="top-rated">Top Rated</Link>
          <h1>Now Playing</h1>
          {this.props.now_playing.results.map((movie, i) => {
            console.log("Inside, movie title:", movie.original_title);

            return (
              <div class="movie-details" key={movie + i}>
                <h3>{movie.original_title}</h3>
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
