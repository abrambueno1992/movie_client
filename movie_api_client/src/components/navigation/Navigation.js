import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
const styles = theme => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap"
  },
  paper: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});
const btnStyles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function handleClick(event) {
  event.preventDefault();
  alert("You clicked a breadcrumb."); // eslint-disable-line no-alert
}

class CustomSeparator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      nowPlaying: true,
      topRated: false,
      popular: false
    };
  }

  handleInput = e => {
    this.setState({ search: e.target.value });
  };
  handleSubmit = () => {
    this.props.searchMovie(this.state.search);
    this.props.history.push(`/search/${this.state.search}`);
    this.setState({
      search: ""
    });
  };
  handleClick = e => {
    const value = !e.target.value;
    // e.preventDefault();
    this.setState({ [e.target.name]: value });
  };
  render() {
    const { classes } = this.props;
    const nowPlayingColor = this.props.value === 1 ? "textPrimary" : "inherit";
    const popularColor = this.props.value === 2 ? "textPrimary" : "inherit";
    const topRatedColor = this.props.value === 3 ? "textPrimary" : "inherit";
    console.log("What is the color?: ", this.props.value);

    return (
      <div>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="large" />}
              arial-label="Breadcrumb"
            >
              <Link
                color={nowPlayingColor}
                value={this.state.nowPlaying}
                name="nowPlaying"
                href="/"
                onClick={this.handleClick}
              >
                Now Playing
              </Link>
              <Link
                color={popularColor}
                // color="textPrimary"
                value={this.state.popular}
                name="popular"
                href="/popular"
                onClick={this.handleClick}
              >
                Popular
              </Link>
              <Link
                color={topRatedColor}
                href="/top-rated"
                name="topRated"
                value={this.state.topRated}
                onClick={this.handleClick}
              >
                Top Rated
              </Link>
              {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
            </Breadcrumbs>
          </Paper>
        </div>
        <div>
          <Input
            type="text"
            value={this.state.search}
            onChange={this.handleInput}
            placeholder="Search for a movie"
            fullWidth={true}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Primary
          </Button>
        </div>
      </div>
    );
  }
}

CustomSeparator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomSeparator);
