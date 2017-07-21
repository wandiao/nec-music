import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

export default store