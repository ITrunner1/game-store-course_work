import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    isMenuOn: false
}

const menuSlice = createSlice({
    name: `menu`,
    initialState,
    reducers: { 
        setMenuOn: (state) => { 
            state.isMenuOn = true;
        },

        setMenuOff: (state) => { 
            state.isMenuOn = false;
        }
    },
});

export const { setMenuOn, setMenuOff } = menuSlice.actions;
export const getMenuStatus = (state) => state.menu.isMenuOn;
export default menuSlice.reducer;
