import { createSlice } from "@reduxjs/toolkit";
import type {DashboardInitialStateModel} from "../../../types/slices/DashboardSliceModel"

const initialState: DashboardInitialStateModel = {
}

const DashboardSlice = createSlice({
    name: "DashboardSlice",
    initialState,
    reducers: {
        
    }
})

export default DashboardSlice.reducer;