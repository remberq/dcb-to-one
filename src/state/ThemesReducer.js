import React from "react";
export const ThemeContext = React.createContext();

export const themeInitialState = [
    {
        id: 1,
        theme: "Русский рэп",
        questions: [
            {
                id: 1,
                themeId: 1,
                cost: 100,
                question: "Почему закрыли версус",
                active: true
            },
            {
                id: 2,
                themeId: 1,
                cost: 200,
                question: "В каком году умер гуф",
                active: true
            },
            {
                id: 3,
                themeId: 1,
                cost: 400,
                question: "В каком году умер гуф",
                active: true
            },
            {
                id: 4,
                themeId: 1,
                cost: 1000,
                question: "В каком году умер гуф",
                active: true
            }
        ]
    },
    {
        id: 2,
        theme: "Дизайнеры третьей волны",
        questions: [
            {
                id: 1,
                themeId: 2,
                cost: 100,
                question: "Почему дизайн закончился на упячке",
                active: true
            },
            {
                id: 1,
                themeId: 2,
                cost: 200,
                question: "Тут будет вопрос картинкой",
                active: true
            },
            {
                id: 3,
                themeId: 1,
                cost: 400,
                question: "В каком году умер гуф",
                active: true
            },
            {
                id: 4,
                themeId: 1,
                cost: 1000,
                question: "В каком году умер гуф",
                active: true
            }
        ]
    },
    {
        id: 3,
        theme: "Шутки про фронтенд",
        questions: [
            {
                id: 1,
                themeId: 2,
                cost: 100,
                question: "Почему дизайн закончился на упячке",
                active: true
            },
            {
                id: 1,
                themeId: 2,
                cost: 200,
                question: "Тут будет вопрос картинкой",
                active: true
            },
            {
                id: 3,
                themeId: 1,
                cost: 400,
                question: "В каком году умер гуф",
                active: true
            },
            {
                id: 4,
                themeId: 1,
                cost: 1000,
                question: "В каком году умер гуф",
                active: true
            }
        ]
    },
    {
        id: 4,
        theme: "Русы против ящеров",
        questions: [
            {
                id: 1,
                themeId: 2,
                cost: 100,
                question: "Почему дизайн закончился на упячке",
                active: true
            },
            {
                id: 1,
                themeId: 2,
                cost: 200,
                question: "Тут будет вопрос картинкой",
                active: true
            },
            {
                id: 3,
                themeId: 1,
                cost: 400,
                question: "В каком году умер гуф",
                active: true
            },
            {
                id: 4,
                themeId: 1,
                cost: 1000,
                question: "В каком году умер гуф",
                active: true
            }
        ]
    }
];

export const themeReducer = (themes, action) => {
    switch (action.type) {
        case 'ADD_WORD':
            return themes.map(theme => {

                console.log(JSON.stringify(theme))

                if (theme.id === action.payload) {
                    theme.theme = "HUI"
                }

                return theme
            });
        case 'OPEN_QUESTION':
            return themes.map(theme => {

                console.log(action.payload.themeId)

                if (theme.id === action.payload.themeId) {
                    console.log('OPEN_THEME')
                    theme.questions.map(question => {
                        if (question.id === action.payload.id) {
                            console.log('OPEN_QUESTION')
                            question.active = false
                        }
                        return question
                    })
                }
                return theme
            })
        default:
            return themes
    }
};