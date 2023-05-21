import { combineReducers } from "@reduxjs/toolkit";
import favouriteAdsSlice from "./favouriteAdsSlice";

const rootReducer = combineReducers({
    favouriteAdsSlice : favouriteAdsSlice,

});

export default rootReducer;
