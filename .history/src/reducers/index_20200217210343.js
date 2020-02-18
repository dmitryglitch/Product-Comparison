import { combineReducers } from "redux";
import product from "./product";
import user from "./user";
import review from "./review";

export default combineReducers({
  product,
  user,
  review
});
