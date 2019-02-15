import { AppState } from "../modules/app";

export { configureStore } from "./createStore";

export interface ApplicationState {
  appState: AppState;
}