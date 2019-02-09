import React, { Component } from "react";
import { connect } from "react-redux";
import { getPopular } from "../../actions/popular";
class Popular extends Component {
  componentDidMount() {
    this.props.getPopular();
  }

  render() {
    console.log("Popular Movies: ", this.props.popular);

    return (
      <div>
        <h1>Popular </h1>
      </div>
    );
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
