import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import Controller from "../Controller";

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a controller component", () => {
  expect(wrapped.find(Controller).length).toEqual(1);
});
