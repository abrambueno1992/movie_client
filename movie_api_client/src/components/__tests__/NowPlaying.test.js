import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";

import getNowPlaying from "../../actions/nowPlaying";
// Components
import { MemoryRouter } from "react-router";
import NowPlaying from "../nowPlaying/NowPlaying";
import App from "../App";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <MemoryRouter
        initialEntries={[
          "/",
          "/now-playing/:id",
          "/popular",
          "/popular/:id",
          "/top-rated",
          "/top-rated/:id",
          "/search/:query",
          "/search/:query/result/:id"
        ]}
        initialIndex={0}
      >
        <App />
      </MemoryRouter>
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
