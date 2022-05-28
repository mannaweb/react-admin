import { combineReducers } from "redux";

import { authSlice } from "./adminauth";
import { userSlice } from "./user";
export default combineReducers({
     adminauth: authSlice.reducer,
     user: userSlice.reducer,
})