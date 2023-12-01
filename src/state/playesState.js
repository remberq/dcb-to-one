import sergey from '../assets/pictures/СергейКанаев.jpg'
import nikita from '../assets/pictures/НикитаАникин.jpg'
import julia from '../assets/pictures/ЮлияОхрименко.jpg'
import ali from '../assets/pictures/АлиМамедов.jpg'
import daria from '../assets/pictures/ДарьяТолстова.jpg'
import dmitriy from '../assets/pictures/ДмитрийСамошин.jpg'
import slava from '../assets/pictures/ВячеславФролов.jpg'
import katya from '../assets/pictures/ЕкатеринаСмурова.jpg'
import andrey from '../assets/pictures/АндрейАристархов.jpg'

const firstGamePlayers = [
    {
        id: 1,
        avatar: sergey,
        name: 'Сергей Канаев',
        score: 0,
    },
    {
        id: 2,
        avatar: nikita,
        name: 'Никита Аникин',
        score: 0,
    },
    {
        id: 3,
        avatar: julia,
        name: 'Юлия Охрименко',
        score: 0,
    },
]

const secondGamePlayers = [
    {
        id: 1,
        avatar: ali,
        name: 'Али Мамедов',
        score: 0,
    },
    {
        id: 2,
        avatar: daria,
        name: 'Дарья Толстова',
        score: 0,
    },
    {
        id: 3,
        avatar: dmitriy,
        name: 'Дмитрий Самошин',
        score: 0,
    },
]

const thirdGamePlayers = [
    {
        id: 1,
        avatar: slava,
        name: 'Вячеслав Фролов',
        score: 0,
    },
    {
        id: 2,
        avatar: katya,
        name: 'Екатерина Смурова',
        score: 0,
    },
    {
        id: 3,
        avatar: andrey,
        name: 'Андрей Аристархов',
        score: 0,
    },
]

export const allPlayers = {
    1: firstGamePlayers,
    2: secondGamePlayers,
    3: thirdGamePlayers,
}
