import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPersonaFisica } from '../types/PersonaFisicaTypes';

export interface PersonasFisicasState {
    personasFisicas: IPersonaFisica[];
}

const initialState: PersonasFisicasState = {
    personasFisicas: [],
}

export const personasFisicasSlice = createSlice({
    name: 'grocery',
    initialState,
    reducers: {
        onGetPersonasFisicas: ( state, action: PayloadAction<IPersonaFisica[]> ) => {
            state.personasFisicas = action.payload;
        },
    }
});

export const { onGetPersonasFisicas } = personasFisicasSlice.actions;