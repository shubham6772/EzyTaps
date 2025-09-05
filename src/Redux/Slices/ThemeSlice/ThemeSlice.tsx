import { createSlice} from "@reduxjs/toolkit";

const initialState  = {
    isDarkTheme : false
}

const ThemeSlice = createSlice({
    name  : "AuthSlice",
    initialState,
    reducers : {
        setDarkTheme : (state) => {
            return {
                ...state,
                isDarkTheme : true
            }
        },

        setLightTheme : (state)=>{
            return {
                ...state,
                isDarkTheme : false
            }
        }
    }
})

export const {setDarkTheme, setLightTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;