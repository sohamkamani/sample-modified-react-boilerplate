import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

const myNewReducer = (state = 'abc', action) => {
  return 'abc'
}

const myNewReducer2 = (state = 'abc2', action) => {
  return 'abc2'
}

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    myNewReducer,
    myNewReducer2,
    ...asyncReducers
  })
}

export const injectReducer = (store, {key, reducer}) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
