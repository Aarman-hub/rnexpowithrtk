import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
    } from 'redux-persist';
import rootReducers from "./rootReducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers);



const store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware=>
        getDefaultMiddleware({
            serializableCheck:{ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE, REGISTER]},
        }),
});

export const persistore = persistStore(store);


export default store;