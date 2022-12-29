import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import {legacy_createStore,applyMiddleware} from 'redux'

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store;