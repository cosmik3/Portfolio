import { createSelector } from "@reduxjs/toolkit";


export const selectReducer = (state : any) => state.navState


export const  getNavState = createSelector([selectReducer],
    (NavbarStateReducer) => NavbarStateReducer.navState
        
)