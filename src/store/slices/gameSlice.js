import { createSlice } from '@reduxjs/toolkit'
import { allGameTheme } from '../../state/themesState'
import { allPlayers } from '../../state/playesState'

const initialModalState = {
    isOpen: false,
    modalClass: '',
    question: '',
    rowId: '',
    isClosedCatVideo: false,
    sberCatClass: '',
}

const initialState = {
    gameState: allGameTheme[1],
    modalState: initialModalState,
    filledQuestions: [],
    isFieldChanged: false,
    players: allPlayers[1],
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setModalState: (state, action) => {
            state.modalState = { ...state.modalState, ...action.payload }
        },
        setQuestionFill: (state, action) => {
            state.filledQuestions = [...state.filledQuestions, action.payload]
        },
        changeGameState: (state, action) => {
            state.gameState = allGameTheme[action.payload]
            state.filledQuestions = []
            state.modalState = initialModalState
            state.players = allPlayers[action.payload]
        },
        changeScore: (state, action) => {
            state.players.splice(
                state.players.findIndex((el) => el.id === action.payload.id),
                1,
                action.payload
            )
        },
    },
})

export const { setModalState, setQuestionFill, changeGameState, changeScore } = gameSlice.actions

export default gameSlice.reducer
