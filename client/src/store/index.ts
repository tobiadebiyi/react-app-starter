import { AppState } from "../modules/app";

export { store } from "./createStore";

export interface ApplicationState {
  appState: AppState;
}