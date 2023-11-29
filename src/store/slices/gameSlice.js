import { createSlice } from '@reduxjs/toolkit';
import {firstGameInitialState, playGameArray} from "../../state/ThemesReducer";

const initialModalState = {
    isOpen: false,
    modalClass: '',
    question: '',
    rowId: '',
    isClosedCatVideo: false,
    sberCatClass: ''
}

const initialState = {
    gameState: firstGameInitialState,
    modalState: initialModalState,
    filledQuestions: [],
    isFieldChanged: false
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
        changeGameState: (state, action) => {
            state.gameState = playGameArray[action.payload]
            state.filledQuestions = []
            state.modalState = initialModalState
        }
    },
});

export const { setModalState, setQuestionFill, changeGameState } = gameSlice.actions;

export default gameSlice.reducer;
