import { combineReducers } from "@reduxjs/toolkit";
import { navbarStateReducer } from "../reducer/NavbarStateReducer";

export const rootReducer = combineReducers({
    navState : navbarStateReducer
})