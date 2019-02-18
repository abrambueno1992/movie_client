import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";
// Components
import Search from "../search/Search";
import { MemoryRouter } from "react-router";
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
        initialIndex={6}
      >
        <Search />
      </MemoryRouter>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe("Search", () => {
  it("should render successfully and contain testing div", () => {
    expect(wrapped.find(".testingSearch").length).toEqual(1);
  });
});
