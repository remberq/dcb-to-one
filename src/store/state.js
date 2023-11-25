import { configureStore } from '@reduxjs/toolkit';
import gameReducers from './slices/gameSlice';

export const store = configureStore({
    reducer: {
        game: gameReducers,
    },
});
