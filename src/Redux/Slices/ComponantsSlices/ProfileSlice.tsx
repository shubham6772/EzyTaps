import { createSlice } from "@reduxjs/toolkit";
import type ProfileSliceInitialStateModel from "../../../../types/slices/componantSlice/ProfileSliceModel"

const initialState: ProfileSliceInitialStateModel = {
    isProfileCardActive: false
}

const ProfileSlice = createSlice({
    name: "ProfileSlice",
    initialState,
    reducers: {
        toggleProfileCard: (state) => {
            return {
                ...state,
                isProfileCardActive: !state.isProfileCardActive
            }
        }
    }
})

export const { toggleProfileCard } = ProfileSlice.actions;
export default ProfileSlice.reducer;