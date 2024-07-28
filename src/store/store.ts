
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../features/authSlice';
import { personasFisicasSlice } from '../features/personasFisicasSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        personasFisicas: personasFisicasSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch







