import { createSlice } from '@reduxjs/toolkit';
import {themeInitialState} from "../../state/ThemesReducer";

const initialState = {
    gameState: themeInitialState,
    modalState: {
        isOpen: false,
        modalClass: '',
        question: ''
    },
    filledQuestions: []
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setModalState: (state, action) => {
            state.modalState = {...state.modalState, ...action.payload}
        },
        setQuestionFill: (state, action) => {
            state.filledQuestions = [...state.filledQuestions, action.payload]
        },
    },
});

export const { setModalState, setQuestionFill } = gameSlice.actions;

export default gameSlice.reducer;
