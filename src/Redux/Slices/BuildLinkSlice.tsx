import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BuildLinksModel } from "../../../types/slices/BuildLinksModel";

const initialState: BuildLinksModel = {
    availableDomain: [],
    selectedDomain: "google.com", // default value
    isUTMEnable: false,
    UTM_Param_Object: {},
    domainOptions: [
        { value: "google.com", label: "google.com" },
        { value: "github.com", label: "github.com" },
        { value: "netlify.app", label: "netlify.app" },
        { value: "vercel.app", label: "vercel.app" },
        { value: "cloudflare.com", label: "cloudflare.com" },
        { value: "example.com", label: "example.com" },
    ],
    redirectURLError : false,
    fullURL : "",
    linkName : "",
};

const BuildLinkSlice = createSlice({
    name: "BuildLinkSlice",
    initialState,
    reducers: {
        toggleUTMSwitch: (state) => {
            state.isUTMEnable = !state.isUTMEnable;
        },
        fillUTMParamObject: (state, action) => {
            state.UTM_Param_Object = { ...action.payload };
        },
        setSelectedDomain: (state, action: PayloadAction<string>) => {
            state.selectedDomain = action.payload;
        },
        setRedirectURL : (state, {payload}) => {
            return {
                ...state,
                redirectURL : payload
            }
        },
        toggleRedirectURLError: (state, {payload})=>{
            return{
                ...state,
                redirectURLError : payload
            }
        },
        setFullURL : (state, {payload})=>{
            return {
                ...state,
                fullURL : payload
            }
        },
        setLinkName : (state, {payload})=>{
            return {
                ...state,
                linkName : payload
            }
        }
    },
});


export const { toggleUTMSwitch, fillUTMParamObject, setSelectedDomain, setRedirectURL, toggleRedirectURLError, setFullURL, setLinkName } = BuildLinkSlice.actions;
export default BuildLinkSlice.reducer;