import { combineReducers } from "@reduxjs/toolkit";
import { type ZaboListState, zaboReducer } from "./zabos/zaboSlice";
import { type AuthState, authReducer } from "./auth/authSlice";

export interface RootState {
  zabo: ZaboListState;
  auth: AuthState;
}

export const rootReducer = combineReducers({
  zabo: zaboReducer,
  auth: authReducer,
});
