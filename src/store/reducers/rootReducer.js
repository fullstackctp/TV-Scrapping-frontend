import {combineReducers} from 'redux'
import authLoginReducer from './loginReducer'
import dashboardDataReducer from './dashboardReducer'

const rootReducer = combineReducers({
    authLoginReducer,
    dashboardDataReducer,
})

export default rootReducer