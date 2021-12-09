import { combineReducers } from "redux";
import filterReducer from './filterReducer';

 const rootReducer = combineReducers({
    filterReducer: filterReducer
});

export default rootReducer;