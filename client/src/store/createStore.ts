import { applyMiddleware, createStore, Store } from "redux";
import { Reducers } from "./reducers";
import thunk from "redux-thunk";
import { ApplicationState } from ".";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(thunk))
) as Store<ApplicationState>;
