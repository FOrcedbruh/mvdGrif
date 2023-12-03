import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    OlimpicsStatus: boolean
}

const initialState: StateType = {
    OlimpicsStatus: false,
}


const OlimpicsStatusSlice = createSlice({
    name: 'OlimopicsStatus',
    initialState,
    reducers: {
        setOlimpicsComplete(state) {
            state.OlimpicsStatus = true
        },
        resetOlimpicsComplete(state) {
            state.OlimpicsStatus = false
        }
    }
});


export default OlimpicsStatusSlice.reducer;
export const { setOlimpicsComplete, resetOlimpicsComplete } = OlimpicsStatusSlice.actions;