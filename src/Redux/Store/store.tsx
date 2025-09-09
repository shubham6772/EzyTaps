import { configureStore } from "@reduxjs/toolkit";
import DasboardSlice from "../Slices/DashboardSlice"
import AuthSlice from "../Slices/AuthSlice"
import ThemeSlice from "../Slices/ThemeSlice/ThemeSlice";
import ProfileSlice from  "../Slices/ComponantsSlices/ProfileSlice"
import BuildLinkSlice from "../Slices/BuildLinkSlice"

export const store = configureStore({
    reducer : {
        DasboardSlice,
        AuthSlice,
        ThemeSlice,
        ProfileSlice,
        BuildLinkSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;