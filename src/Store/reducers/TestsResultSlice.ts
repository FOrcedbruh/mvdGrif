import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface StateType {
    correctOfLastTest: number,
    nameOfLastTest: string
}


const initialState: StateType = {
    correctOfLastTest: 0,
    nameOfLastTest: ''
}


const TestsResultSlice = createSlice({
    name: 'testsResult',
    initialState,
    reducers: {
        setCorrectOfLastTest(state, action: PayloadAction<number>) {
            state.correctOfLastTest = action.payload;
        },
        setNameOfLastTest(state, action: PayloadAction<string>) {
            state.nameOfLastTest = action.payload;
        }
    }
});



export default TestsResultSlice.reducer;
export const { setCorrectOfLastTest, setNameOfLastTest } = TestsResultSlice.actions;