/*
 * @Author: zengrui
 * @Date: 2020-03-26 18:18:51
 * @LastEditors: zengrui
 * @LastEditTime: 2020-05-09 15:49:50
 * @Description: 启动入口文件
 */

import React from "react";
import ReactDom from "react-dom";
import AppEntry from "./entry.jsx";

module.hot && module.hot.accept();
ReactDom.render(<AppEntry />, document.getElementById("root"));
