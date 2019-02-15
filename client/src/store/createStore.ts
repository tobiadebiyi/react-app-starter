import { applyMiddleware, createStore, Store, compose } from "redux";
import { Reducers } from "./reducers";
import thunk from "redux-thunk";
import { ApplicationState } from ".";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];
const composables = [applyMiddleware(...middlewares)];
const enhancer = compose(...composables);

export const configureStore = () => {
    const store = createStore(Reducers, enhancer) as Store<ApplicationState>;

    sagaMiddleware.run(rootSaga);
    return store;
};
