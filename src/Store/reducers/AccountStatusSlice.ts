import { createSlice } from "@reduxjs/toolkit";;



interface StateType {
    fullAccount: boolean;
}

const initialState: StateType = {
    fullAccount: false
}



const AccountStatusSlice = createSlice({
    name: 'accountStatus',
    initialState,
    reducers: {
        setFullAccount(state) {
            state.fullAccount = true
        },
        resetFullAccount(state) {
            state.fullAccount = false
        }
    }
})


export default AccountStatusSlice.reducer;
export const {setFullAccount, resetFullAccount } = AccountStatusSlice.actions;