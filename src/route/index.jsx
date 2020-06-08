import React from "react";
import { Route } from "react-router-dom";
const routeList = (
  <>
    <Route
      exact
      path="/"
      component={React.lazy(() => import("../pages/Index"))}
    />
    <Route
      path="/login"
      component={React.lazy(() => import("../pages/Login"))}
    />
  </>
);
export default routeList;
