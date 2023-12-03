import { combineReducers, configureStore } from "@reduxjs/toolkit";
import correctSlice from "./reducers/correctSlice";
import AccountStatusSlice from "./reducers/AccountStatusSlice";
import TestsResultSlice from "./reducers/TestsResultSlice";
import OlimpicsStatusSlice from "./reducers/OlimpicsStatusSlice";




const rootReducer = combineReducers({
    correctSlice: correctSlice,
    AccountStatusSlice: AccountStatusSlice,
    TestsResultSlice: TestsResultSlice,
    OlimpicsStatusSlice: OlimpicsStatusSlice,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})


export type AppDispatch = typeof store.dispatch;
export type RootType = ReturnType<typeof store.getState>
export default store;