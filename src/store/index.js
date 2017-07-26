import { createStore,combineReducers } from 'redux'
import reducers from './reducers'

const store = createStore(combineReducers(reducers))

export default store