import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducers";

import {persistStore, persistReducer} from "redux-persist"

import storage from "redux-persist/lib/storage"



const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const  store = configureStore({
    reducer: persistedReducer
})

const persistor = persistStore(store)

export {store, persistor} 






// import favouriteAdsReducer from "./favouriteAdsSlice";

// const store = configureStore({
//     reducer:{
//         favouriteAds :favouriteAdsReducer
//     }
// });

// export default store;