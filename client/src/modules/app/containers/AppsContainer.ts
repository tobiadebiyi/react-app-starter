import { connect } from "react-redux";
import { ApplicationState } from "../../../store";
import { App, AppProps } from "../components";
import { withRouter } from "react-router-dom";

const mapStateToProps = (
  state: ApplicationState): AppProps => {
  return {
    isLoading: state.appState.isLoading,
  };
};

export const AppsContainer = withRouter(
  connect(mapStateToProps)(App)
);