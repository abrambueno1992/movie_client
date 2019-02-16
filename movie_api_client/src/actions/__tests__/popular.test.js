import { GET_POPULAR, GET_POPULAR_REQUEST, getPopular } from "../popular";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library
import configureMockStore from "redux-mock-store"; //ES6 modules
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("returns the proper action type", () => {
    fetchMock.getOnce(url, {
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [{ type: GET_POPULAR_REQUEST }];
    const store = mockStore();

    return store.dispatch(getPopular()).then(() => {
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
      { type: GET_POPULAR },
      { type: GET_POPULAR, payload: { todos: ["do something"] } }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(getPopular()).then(() => {
      // return of async actions
      expect(store.getActions()[1]).toEqual(expectedActions[1]);
    });
  });
});
