import { createSlice } from "@reduxjs/toolkit";;



interface StateType {
    fullAccount: boolean;
}

const initialState: StateType = {
    fullAccount: false
}


const first_name = localStorage.getItem('first_name');
const last_name = localStorage.getItem('last_name');

const AccountStatusSlice = createSlice({
    name: 'accountStatus',
    initialState,
    reducers: {
        setFullAccount(state) {
            state.fullAccount = true
        },
        setRenderFullAccount(state) {
            if (first_name && last_name) {
                state.fullAccount = true
            }
        },
        resetFullAccount(state) {
            state.fullAccount = false
        }
    }
})


export default AccountStatusSlice.reducer;
export const {setFullAccount, resetFullAccount, setRenderFullAccount} = AccountStatusSlice.actions;