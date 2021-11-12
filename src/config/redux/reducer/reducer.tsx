import { combineReducers } from "redux";
import homeReducer from "./home"
import  userReducer from "./user";
import productReducer from "./product"
import orderReduser from "./order"

const reducer = combineReducers({homeReducer, userReducer, productReducer, orderReduser})

export default reducer;