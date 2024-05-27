import { createSlice } from "@reduxjs/toolkit";



interface Image {
    navState : string | null
}


const initialState : Image = {
    navState : ""
}


export const NavbarStateReducer = createSlice({
    name: 'navState',
    initialState,
    reducers :{
        setNavbarState(state, action){
            state.navState = action.payload // getting the imageURl
        }
    }

})


export const navbarStateReducer = NavbarStateReducer.reducer
export const {setNavbarState} = NavbarStateReducer.actions