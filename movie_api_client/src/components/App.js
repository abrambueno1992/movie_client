import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// components import
import NowPlaying from "./nowPlaying/NowPlaying";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import DisplaySelection from "./displaySelection/DisplaySelection";
import Search from "./search/Search";
import "./App.css";

const App = () => {
  return (
    <Router className="App">
      <div>
        <Route exact path="/" component={NowPlaying} />
        <Route exact path="/now-playing/:id" component={DisplaySelection} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/popular/:id" component={DisplaySelection} />
        <Route exact path="/top-rated" component={TopRated} />
        <Route exact path="/top-rated/:id" component={DisplaySelection} />
        <Route exact path="/search/:query" component={Search} />
        <Route
          exact
          path="/search/:query/result/:id"
          component={DisplaySelection}
        />
      </div>
    </Router>
  );
};

export default App;
