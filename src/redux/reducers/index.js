import { combineReducers } from "redux";
import { componentsReducer } from "./componentsReducer"

const rootReducer = combineReducers({
  components: componentsReducer
})

export default rootReducer;
