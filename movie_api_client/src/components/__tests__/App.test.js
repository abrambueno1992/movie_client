import React from "react";
// import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import { BrowserRouter as Router, Route } from "react-router-dom";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a Router wrapper", () => {
  expect(wrapped.find(Router).length).toEqual(1);
});

it("shows the correct number of routes", () => {
  expect(wrapped.find(Route).length).toEqual(8);
});
