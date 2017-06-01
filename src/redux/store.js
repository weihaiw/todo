import { createStore } from 'redux';
import rootReducer from './reducers/index.js'
let store = createStore(rootReducer)
export default store;
