import React from "react";
import { mount, shallow } from "enzyme";
import Root from "../../Root";
// Components
import DisplaySelection from "../displaySelection/DisplaySelection";
import Popular from "../popular/Popular";
import NowPlaying from "../nowPlaying/NowPlaying";
import App from "../App";
import { MemoryRouter } from "react-router";

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
        initialIndex={1}
      >
        <App />
      </MemoryRouter>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe("DisplaySelection", () => {
  it("should render successfully and contain testing div", () => {
    expect(wrapped.find(DisplaySelection).length).toEqual(1);
  });
});
