import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";
// Components
import Popular from "../popular/Popular";
import { MemoryRouter } from "react-router";
import App from "../App";
const arrData = {
  page: 1,
  total_results: 19827,
  total_pages: 992,
  results: [
    {
      vote_count: 315,
      id: 399579,
      video: false,
      vote_average: 6.7,
      title: "Alita: Battle Angel",
      popularity: 483.184,
      poster_path: "/xRWht48C2V8XNfzvPehyClOvDni.jpg",
      original_language: "en",
      original_title: "Alita: Battle Angel",
      genre_ids: [28, 878, 53, 10749],
      backdrop_path: "/8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg",
      adult: false,
      overview:
        "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
      release_date: "2019-01-31"
    },
    {
      vote_count: 1182,
      id: 480530,
      video: false,
      vote_average: 6.6,
      title: "Creed II",
      popularity: 295.131,
      poster_path: "/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
      original_language: "en",
      original_title: "Creed II",
      genre_ids: [18, 28],
      backdrop_path: "/8yqLPNwNCtpOPc3XkOlkSMnghzw.jpg",
      adult: false,
      overview:
        "Follows Adonis Creed's life inside and outside of the ring as he deals with new found fame, issues with his family, and his continuing quest to become a champion.",
      release_date: "2018-11-21"
    }
  ]
};
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
        initialIndex={2}
      >
        <App />
      </MemoryRouter>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe("Popular", () => {
  it("should render successfully and contain testing div", () => {
    expect(wrapped.find(Popular).length).toEqual(1);
  });
});
