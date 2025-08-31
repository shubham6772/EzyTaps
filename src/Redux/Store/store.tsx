import { configureStore } from "@reduxjs/toolkit";
import DasboardSlice from "../Slices/DashboardSlice"
import AuthSlice from "../Slices/AuthSlice"

export const store = configureStore({
    reducer : {
        DasboardSlice,
        AuthSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;