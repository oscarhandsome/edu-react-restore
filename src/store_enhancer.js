import { createStore, compose } from "redux";
// import { createStore, applyMiddleware } from "redux";

import reducer from "./reducers";

// const logMiddleware = ({getState, _dispatch}) => (next) => (action) => {
//   console.log(action.type, getState());
//   return next(action);
// };

// const stringMiddleware = () => (next) => (action) => {
//     if (typeof action === "string") {
//       return next({
//         type: action,
//       });

//     return next(action);
// };

const logEnhancer = (createStore) => (...args) => {
  const store = createStore(...args);
  const originalDispatch = store.dispatch;

  store.dispatch = (action) => {
    console.log(`Enhancer catched this reducer action: ${action.type}`);
    return originalDispatch(action);
  };

  return store;
};

const stringEnhancer = (createStore) => (...args) => {
  const store = createStore(...args);
  const originalDispatch = store.dispatch;

  store.dispatch = (action) => {
    if (typeof action === "string") {
      return originalDispatch({
        type: action,
      });
    }

    return originalDispatch(action);
  };

  return store;
};

const store = createStore(reducer, compose(stringEnhancer, logEnhancer));

// const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch("Welcome to ReStore!");

export default store;
