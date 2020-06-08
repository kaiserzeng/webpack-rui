/*
 * @Author: zengrui
 * @Date: 2020-05-08 15:31:38
 * @LastEditors: zengrui
 * @LastEditTime: 2020-05-09 15:49:27
 * @Description: 入口文件配置store以及route
 */

import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import { Router, Switch } from "react-router-dom";
import { createHistory } from "./history";
import routeList from "./route";
import store from "./store";

const AppRouter = hot(({ history, routerOptions, children }) => {
  return (
    <Router history={history} {...routerOptions}>
      {children}
    </Router>
  );
});

const AppEntry = (props) => {
  const history = createHistory(props.historyType, {
    ...props.historyOptions,
  });

  return (
    <Provider store={store}>
      <AppRouter history={history} routerOptions={props.routerOptions}>
        <React.Suspense fallback={<div>loading...</div>}>
          <Switch>{routeList}</Switch>
        </React.Suspense>
      </AppRouter>
    </Provider>
  );
};

AppEntry.defaultProps = {
  routerOptions: {},
  historyOptions: {},
  historyType: "browserHistory",
  basename: "/",
};
export default AppEntry;
