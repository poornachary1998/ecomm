import { legacy_createStore } from "redux";
import rootReducers from "./index";

const store= legacy_createStore(rootReducers)
 
export default store;
