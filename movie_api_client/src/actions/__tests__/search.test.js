import configureMockStore from "redux-mock-store"; //ES6 modules
import { SEARCH_MOVIE, SEARCH_MOVIE_REQUEST, searchMovie } from "../search";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;
describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("returns the proper action type", () => {
    fetchMock.getOnce(url, {
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [{ type: SEARCH_MOVIE_REQUEST }];
    const store = mockStore();

    return store.dispatch(searchMovie()).then(() => {
      // return of async actions
      expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
    });
  });
  it("returns the proper action type", () => {
    fetchMock.getOnce(url + "the matrix", {
      headers: { "content-type": "application/json" },
      body: { todos: ["do something"] }
    });

    const expectedActions = [
      { type: SEARCH_MOVIE },
      { type: SEARCH_MOVIE, payload: { todos: ["do something"] } }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(searchMovie("the matrix")).then(() => {
      // return of async actions
      expect(store.getActions()[1]).toEqual(expectedActions[1]);
    });
  });
});

// describe("searchMovie", () => {
//   it("has the correct type", async () => {
//     // Initialize mockstore with empty state
//     const initialState = {};
//     const store = mockStore(initialState);

//     // Dispatch the action
//     // store.dispatch(searchMovie());

//     // Return the promise
//     await store.dispatch(searchMovie("the matrix"));
//     const actions = store.getActions();
//     console.log("store", store.getActions());
//     expect(actions).toEqual({ type: "SEARCH_MOVIE_SUCCESS" });
//     // return store.dispatch(searchMovie("the matrix")).then(() => {
//     //   const actions = store.getActions();
//     //   expect(actions[0]).toEqual(SEARCH_MOVIE);
//     // });
//     // const action = searchMovie();
//     // expect(action.dispatch.type).toEqual(SEARCH_MOVIE);
//   });
// });
// describe("changePurchaseStatus", () => {
//   it("handles changing a purchase status and fetches all purchases", async () => {
//     const dispatch = jest.fn();
//     const getState = jest.fn();
//     await searchMovie("the matrix")(dispatch, getState);
//     expect(dispatch).toBeCalledWith({type: "SEARCH_MOVIE"});
//     // expect(dispatch).toBeCalledWith({type: "CHANGE_PURCHASE_STATE_SUCCESS", meta: { id: "rylauNS2GG", status: "sent" }});
//     // expect(dispatch).toBeCalledWith({type: "FETCH_ALL_PURCHASES_STARTED"});
//   });
// });
