import { combineReducers } from "redux";
import homeReducer from "./home"
// import user from "./user";

const reducer = combineReducers({homeReducer})

export default reducer;