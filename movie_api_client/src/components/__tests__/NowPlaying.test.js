import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";

import getNowPlaying from "../../actions/nowPlaying";
// Components
import NowPlaying from "../nowPlaying/NowPlaying";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <NowPlaying />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe("ConnectedShowBox", () => {
  it("should render successfully and contain testing div", () => {
    expect(wrapped.find(".testing").length).toEqual(1);
  });
});
