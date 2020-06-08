/*
 * @Author: zengrui
 * @Date: 2020-05-09 15:20:28
 * @LastEditors: zengrui
 * @LastEditTime: 2020-05-09 16:15:28
 * @Description: 全局state
 */
export const global = {
  state: { count: "global-state" }, // initial state
  reducers: {
    increment(state, payload) {
      return {
        count: `${state.count}${payload}`,
      };
    },
  },

  effects: (dispatch) => ({
    async incrementAsync(payload, rootState) {
      const test = new Promise((resolve) =>
        setTimeout(() => {
          resolve("success");
        }, 2000)
      );
      test.then((res) => {
        dispatch.global.increment(payload);
      });
    },
  }),
};
