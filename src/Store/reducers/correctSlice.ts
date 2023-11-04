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
        incrementCorrect(state) {
            state.correct += 1
        },
        nothingCorrect(state) {
            state.correct += 0
        },
        incrementPoints(state, action: PayloadAction<number>) {
            state.points += action.payload
        },
        nothingPoints(state) {
            state.points -= 0
        },
        allReset(state, action: PayloadAction<number>) {
            state.correct = action.payload;
            state.points = action.payload;
            console.log(state.correct, state.points);
        }
    }
})


export const {incrementCorrect, nothingCorrect, incrementPoints, nothingPoints, allReset} = correctSlice.actions;
export default correctSlice.reducer;