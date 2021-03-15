import Reducer from './reducer/index'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(Reducer, applyMiddleware(thunk))

export default store;