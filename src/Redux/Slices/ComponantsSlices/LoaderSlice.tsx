import { createSlice } from "@reduxjs/toolkit";
import type LoaderSliceInitialStateModel from "../../../../types/slices/componantSlice/LoaderSliceModel"

const initialState: LoaderSliceInitialStateModel = {
    isLoading : false
}

const LoaderSlice = createSlice({
    name : "LoaderSlice",
    initialState,
    reducers : {
        toggleLoader : (state) => {
            return {
                ...state,
                isLoading : !state.isLoading
            }
        }

    }
})


export const {toggleLoader} = LoaderSlice.actions;
export default LoaderSlice.reducer;