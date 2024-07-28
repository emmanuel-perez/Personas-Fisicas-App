import { PayloadAction, createSlice } from '@reduxjs/toolkit'


export interface IAuthState {
    isAuthenticated: boolean,
    jwt: string
    // user: IUser | null,
}

const initialState: IAuthState = {
    isAuthenticated: false,
    jwt: ""
    // user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onSetIsAuthenticated: ( state, action: PayloadAction< boolean > ) => {
            state.isAuthenticated = action.payload;
        },
        onSetJwt: (state, action: PayloadAction<string>) => {
            state.jwt = action.payload;
        },
        // onSetCurrentUser: ( state, action: PayloadAction< IUser | null > ) => {
        //     state.user = action.payload;
        // },
        onClearUser: ( state ) => {
            state.isAuthenticated = false;
            state.jwt = "";
        }
    }
});

export const { 
    onSetIsAuthenticated, 
    onSetJwt,
    // onSetCurrentUser, 
    onClearUser 
} = authSlice.actions;