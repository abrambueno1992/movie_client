import React, { Component } from "react";
import axios from "axios";
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
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
