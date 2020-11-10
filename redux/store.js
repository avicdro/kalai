import rootReducer from "./reducers"
import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    enhancer
  )
export default createStore
