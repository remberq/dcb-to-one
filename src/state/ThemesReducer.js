import picOne from '../assets/pictures/1.jpg'
import video1 from '../assets/video/video1.MP4'
export const themeInitialState = [
    {
        id: 'q',
        theme: 'Русский рэп',
        questions: [
            {
                id: 'q1',
                themeId: 'q',
                cost: 100,
                question: 'Почему закрыли версус',
                active: true,
                picture: picOne
            },
            {
                id: 'q2',
                themeId: 'q',
                cost: 200,
                question: 'В каком году умер гуф',
                active: true,
                video: video1
            },
            {
                id: 'q3',
                themeId: 'q',
                cost: 400,
                question: 'В каком году умер гуф',
                active: true,
            },
            {
                id: 'q4',
                themeId: 'q',
                cost: 1000,
                question: 'В каком году умер гуф',
                active: true,
            },
        ],
    },
    {
        id: 'w',
        theme: 'Дизайнеры третьей волны',
        questions: [
            {
                id: 'w1',
                themeId: 'w',
                cost: 100,
                question: 'Почему дизайн закончился на упячке',
                active: true,
            },
            {
                id: 'w2',
                themeId: 'w',
                cost: 200,
                question: 'Тут будет вопрос картинкой',
                active: true,
            },
            {
                id: 'w3',
                themeId: 'w',
                cost: 400,
                question: 'В каком году умер гуф',
                active: true,
            },
            {
                id: 'w4',
                themeId: 'w',
                cost: 1000,
                question: 'В каком году умер гуф',
                active: true,
            },
        ],
    },
    {
        id: 'e',
        theme: 'Шутки про фронтенд',
        questions: [
            {
                id: 'e1',
                themeId: 'e',
                cost: 100,
                question: 'Почему дизайн закончился на упячке',
                active: true,
            },
            {
                id: 'e2',
                themeId: 'e',
                cost: 200,
                question: 'Тут будет вопрос картинкой',
                active: true,
            },
            {
                id: 'e3',
                themeId: 'e',
                cost: 400,
                question: 'В каком году умер гуф',
                active: true,
            },
            {
                id: 'e4',
                themeId: 'e',
                cost: 1000,
                question: 'В каком году умер гуф',
                active: true,
            },
        ],
    },
    {
        id: 'r',
        theme: 'Русы против ящеров',
        questions: [
            {
                id: 'r1',
                themeId: 'r',
                cost: 100,
                question: 'Почему дизайн закончился на упячке',
                active: true,
            },
            {
                id: 'r2',
                themeId: 'r',
                cost: 200,
                question: 'Тут будет вопрос картинкой',
                active: true,
            },
            {
                id: 'r3',
                themeId: 'r',
                cost: 400,
                question: 'В каком году умер гуф',
                active: true,
            },
            {
                id: 'r4',
                themeId: 'r',
                cost: 1000,
                question: 'В каком году умер гуф',
                active: true,
            },
        ],
    },
];
//
// export const themeReducer = (themes, action) => {
//     switch (action.type) {
//         case 'ADD_WORD':
//             return themes.map((theme) => {
//                 if (theme.id === action.payload) {
//                     theme.theme = 'HUI';
//                 }
//
//                 return theme;
//             });
//         case 'OPEN_QUESTION':
//             return themes.map((theme) => {
//                 let newTheme = {...theme};
//                 if (theme.id === action.payload.themeId) {
//                     newTheme.questions.map((question) => {
//                         let test = {...question}
//                         if (test.id === action.payload.id) {
//                             test.active = false;
//                         }
//                         return test;
//                     });
//                 }
//                 return newTheme;
//             });
//         default:
//             return themes;
//     }
// };
