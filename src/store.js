import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

let store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;

