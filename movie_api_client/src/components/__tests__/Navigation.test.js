import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";
// Components
import Navigation from "../navigation/Navigation";
import App from "../App";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <Navigation />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe("Navigation", () => {
  it("should render successfully and contain testing div", () => {
    // wrapped.setProps({ popular: arrData });
    expect(wrapped.find(".testingNavigation").length).toEqual(1);
  });
});
