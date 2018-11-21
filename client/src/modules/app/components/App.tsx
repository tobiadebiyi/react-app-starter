import * as React from "react";
import "typeface-roboto/index.css";
import { CssBaseline, LinearProgress } from "@material-ui/core";
import { Switch, Route } from "react-router";
import Landing from "../../landing";

export interface AppProps {
  isLoading: boolean;
}

export class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <CssBaseline />
        {<LinearProgress variant="indeterminate" />}
        <Switch>
          <Route exact={true} path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}
