import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// components import
import NowPlaying from "./nowPlaying/NowPlaying";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  componentDidMount = () => {
    const api_key = process.env.REACT_APP_API_KEY;
    console.log("api key:", api_key);
    const options = {
      method: "GET",
      header: { "content-type": "application/json" },
      url: `https://api.themoviedb.org/3/movie/76341?api_key=${api_key}`
    };
    let result;
    axios(options)
      .then(res => {
        result = res;
        console.log("success: ", res);
      })
      .catch(err => console.log("ERROR:", err));
    console.log("RESULT: ", result);
  };

  render() {
    return (
      <Router className="App">
        <div>
          <Route exact path="/" component={NowPlaying} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/top-rated" component={TopRated} />
        </div>
      </Router>
    );
  }
}

export default App;
