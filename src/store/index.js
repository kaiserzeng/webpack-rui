/*
 * @Author: zengrui
 * @Date: 2020-05-08 16:32:41
 * @LastEditors: zengrui
 * @LastEditTime: 2020-05-09 15:47:57
 * @Description: 初始化models
 */

import { init } from "@rematch/core";
import * as models from "./models/index";
const store = init({
  models,
});

export default store;
