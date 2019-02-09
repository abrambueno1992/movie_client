import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopRated } from "../../actions/topRated";

class TopRated extends Component {
  componentDidMount = () => {
    this.props.getTopRated();
  };

  render() {
    console.log("Top Rated Movies:", this.props.top_rated);

    return (
      <div>
        <h1>Top Rated</h1>
      </div>
    );
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
