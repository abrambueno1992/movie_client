import { GET_TOP_RATED, GET_TOP_RATED_REQUEST, getTopRated } from "../topRated";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library
import configureMockStore from "redux-mock-store"; //ES6 modules
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("returns the proper action type", () => {
    fetchMock.getOnce(url, {
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [{ type: GET_TOP_RATED_REQUEST }];
    const store = mockStore();

    return store.dispatch(getTopRated()).then(() => {
      // return of async actions
      expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
    });
  });
  it("returns the proper action type and payload", () => {
    fetchMock.getOnce(url, {
      headers: { "content-type": "application/json" },
      body: { todos: ["do something"] }
    });

    const expectedActions = [
      { type: GET_TOP_RATED },
      { type: GET_TOP_RATED, payload: { todos: ["do something"] } }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(getTopRated()).then(() => {
      // return of async actions
      expect(store.getActions()[1]).toEqual(expectedActions[1]);
    });
  });
});

