import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";
// Components
import TopRated from "../topRated/TopRated";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <TopRated />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe("ConnectedShowBox", () => {
  it("should render successfully and contain testing div", () => {
    expect(wrapped.find(".testingTopRated").length).toEqual(1);
  });
});
