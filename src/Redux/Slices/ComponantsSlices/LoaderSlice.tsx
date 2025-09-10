import { createSlice } from "@reduxjs/toolkit";
import type LoaderSliceInitialStateModel from "../../../../types/slices/componantSlice/LoaderSliceModel"

const initialState: LoaderSliceInitialStateModel = {
    isLoading: false
}

const LoaderSlice = createSlice({
    name: "LoaderSlice",
    initialState,
    reducers: {
        setLoadingTrue: (state) => {
            state.isLoading = true;
        },
        setLoadingFalse: (state) => {
            state.isLoading = false;
        },
    }
})


export const { setLoadingFalse, setLoadingTrue } = LoaderSlice.actions;
export default LoaderSlice.reducer;