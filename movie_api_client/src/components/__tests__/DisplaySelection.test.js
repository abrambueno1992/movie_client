import React from "react";
import { mount, shallow } from "enzyme";
import Root from "../../Root";
// Components
import DisplaySelection from "../displaySelection/DisplaySelection";
import Popular from "../popular/Popular";
import App from "../App";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <Popular>
        <DisplaySelection />
      </Popular>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe("DisplaySelection", () => {
  it("should render successfully and contain testing div", () => {
    // wrapped.setProps({ popular: arrData });
    console.log(wrapped.prototype);

    expect(wrapped.find(".display-selection").length).toEqual(1);
  });
});
