import changeTheNumber from "./updown";
import muldivTheNumber from "./muldiv";
import { combineReducers } from "redux";
const rootReducer=combineReducers({changeTheNumber,muldivTheNumber});
export default rootReducer;