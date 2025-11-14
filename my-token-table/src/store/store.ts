// src/store/store.ts
import { configureStore, createReducer } from '@reduxjs/toolkit';

// Create a simple placeholder reducer that does nothing
const placeholderReducer = createReducer({}, () => { });

export const store = configureStore({
    reducer: {
        // We add the placeholder here.
        // This satisfies Redux's requirement for a valid reducer.
        placeholder: placeholderReducer,

        // When you create your first real slice, you'll add it here:
        // e.g., ui: uiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;