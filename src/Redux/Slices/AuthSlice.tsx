import { createSlice} from "@reduxjs/toolkit";
import type {AuthInitialStateModel} from "../../../types/slices/AuthSliceModel"

const initialState  : AuthInitialStateModel  = {
    isAuthenticated : true,
    isLoggedInPage  : true
}

const AuthSlice = createSlice({
    name  : "AuthSlice",
    initialState,
    reducers : {
        toggleAuthentication : (state) => {
            return {
                ...state,
                isAuthenticated : !state.isAuthenticated
            }
        },

        toggleLogInSignUp : (state) => {
            return {
                ...state,
                isLoggedInPage : !state.isLoggedInPage
            }
        }
    }
})

export const {toggleAuthentication, toggleLogInSignUp} = AuthSlice.actions;
export default AuthSlice.reducer;