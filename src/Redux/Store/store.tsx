import { configureStore } from "@reduxjs/toolkit";
import DasboardSlice from "../Slices/DashboardSlice"
import AuthSlice from "../Slices/AuthSlice"
import ThemeSlice from "../Slices/ThemeSlice/ThemeSlice";
import ProfileSlice from  "../Slices/ComponantsSlices/ProfileSlice"

export const store = configureStore({
    reducer : {
        DasboardSlice,
        AuthSlice,
        ThemeSlice,
        ProfileSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;