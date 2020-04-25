import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../layouts/Main"
import Landing from "../pages/Landing"

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact>
          <Main>
            <Landing />
          </Main>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
