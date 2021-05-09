import { combineReducers } from "redux";
import { reducer as counterReducer } from "./counter/reducer";
import { reducer as productReducer } from "./product/reducer";

export const reducers =  combineReducers({
  counter: counterReducer,
  products: productReducer
})