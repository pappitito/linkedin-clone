import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        noAccount: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload

        },
        logout: (state) =>{
            state.user = null
        },
        toggleNoAccount: (state) => {
            state.noAccount = !state.noAccount
        }

    }
})

export const {login, logout, toggleNoAccount} = userSlice.actions

export const selectUser = (state) => state.user.user;
export const accountAvailable = (state) => state.user.noAccount

export default userSlice.reducer