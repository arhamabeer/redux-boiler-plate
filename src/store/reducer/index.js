// When You are using multiple reducer file (when developing big application use multiple reducer files), use this method to first combine them and then export them !!!

import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer'
import app_reducer from './app_reducer'

var state = combineReducers({
    auth: auth_reducer,
    app: app_reducer
})

export default state;

        // *---------------*    END     *---------------------* 



        // When You are using single reducer file, use directly index.js (given below) and config it!!!


// const INITIAL_STATE = {
//     name: 'arham',
//     school: ['fj','falcon','gdc','fuuast']
// }


// export default (state = INITIAL_STATE)=>{
//     return state
// }