import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface initialStateType {
    correct: number,
    points: number
}

const initialState: initialStateType = {
    correct: 0,
    points: 0
}


const correctSlice = createSlice({
    name: 'correct',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.correct += 1
        },
        nothing(state) {
            state.correct += 0
        },
        incrementPoints(state, action: PayloadAction<number>) {
            state.points += action.payload
        },
        decrementPoints(state) {
            state.points -= 0
        },
        reset(state, action: PayloadAction<number>) {
            state.correct = action.payload;
            state.points = action.payload;
            console.log(state.correct, state.points);
        }
    }
})


export const {increment, nothing, incrementPoints, decrementPoints, reset} = correctSlice.actions;
export default correctSlice.reducer;