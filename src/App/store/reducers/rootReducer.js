import { combineReducers } from 'redux'
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
    Weather: weatherReducer,
});

export default rootReducer