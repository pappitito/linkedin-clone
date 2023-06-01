import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        noAccount: false,
        searchActive: false,
        mobileSearch: false,
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
        },
        toggleSearchActive:  (state)=>{
             state.searchActive = !state.searchActive
        },
        toggleMobileActive:  (state)=>{
            state.mobileActive = true
        },
        toggleMobileInactive: (state)=>{
            state.mobileActive = false
        }

    }
})

export const {login, logout, toggleNoAccount, toggleSearchActive, toggleMobileActive,toggleMobileInactive} = userSlice.actions

export const selectUser = (state) => state.user.user;
export const accountAvailable = (state) => state.user.noAccount
export const isSearchActive = (state) => state.user.searchActive
export const isMobileActive = (state) => state.user.mobileActive

export default userSlice.reducer