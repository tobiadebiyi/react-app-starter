import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AppsContainer } from "./modules/app/containers/AppsContainer";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={createBrowserHistory()} >
      <AppsContainer />
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
