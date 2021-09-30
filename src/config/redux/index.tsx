import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer";

const store = createStore(reducer, applyMiddleware(thunk));
export type RootStore = ReturnType<typeof reducer>
export default store;