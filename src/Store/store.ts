import { combineReducers, configureStore } from "@reduxjs/toolkit";
import correctSlice from "./reducers/correctSlice";


const rootReducer = combineReducers({
    correctSlice: correctSlice
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})


export type AppDispatch = typeof store.dispatch;
export type RootType = ReturnType<typeof store.getState>
export default store;