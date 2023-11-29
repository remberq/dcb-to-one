import { ThemeItem, QuestionItems } from './ThemeItem';
import styles from '../styles/PlayField.module.css';
import {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import avatar1 from '../assets/pictures/1.jpg'
import defaultAvatar from '../assets/pictures/default.png'

const mainArr = ['q', 'w', 'e', 'r'];
const questionArr = ['1', '2', '3', '4'];

const playersArray = [
    {
        avatar: avatar1,
        name: "Просто Андрей",
        score: 3000
    },
    {
        name: "Карпенко Андрей",
        score: 2500
    },
    {
        avatar: avatar1,
        name: "Я настолько преисполнился в своем познании",
        score: 10
    }
]

export function PlayField() {
    const [isOpenProcess, setOpenProcess] = useState(false)
    const gameState = useSelector((state) => state.game.gameState)
    const isModalOpen = useSelector((state) => state.game.modalState.isOpen)
    const [combinationOne, setCombinationOne] = useState('');
    const [combinationTwo, setCombinationTwo] = useState('');
    const isThemeChanged = localStorage.getItem('field')

    useEffect(() => {
        setCombinationOne('')
        setCombinationTwo('')
        setOpenProcess(false)
    }, [isThemeChanged])

    const handleKeyDown = useCallback((e) => {
        if (e.repeat) return;
        if (!isModalOpen && !isOpenProcess) {
            if (
                mainArr.includes(e.key.toLowerCase()) &&
                combinationOne !== e.key.toLowerCase()
            ) {
                setCombinationOne(e.key.toLowerCase());
                setCombinationTwo('');
            }
            if (
                questionArr.includes(e.key.toLowerCase()) &&
                combinationTwo !== e.key.toLowerCase()
            ) {
                setCombinationTwo(e.key.toLowerCase());
            }

            if (combinationOne === e.key.toLowerCase()) {
                setCombinationOne('');
            }
            if (combinationTwo === e.key.toLowerCase()) {
                setCombinationTwo('');
            }
        }
    }, [combinationOne, combinationTwo, isModalOpen, isOpenProcess]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    const combination = combinationOne + combinationTwo;

    const renderPlayThemes = (themes, combination) => {
        return themes.map((theme) => (
            <tr key={theme.id} className={styles.row}>
                <td>
                    <ThemeItem combination={combination} theme={theme} />
                </td>

                {theme.questions.map((question) => (
                    <td key={question.id}>
                        <QuestionItems
                            combination={combination}
                            question={question}
                            setOpenProcess={setOpenProcess}
                        />
                    </td>
                ))}
            </tr>
        ));
    };
    return (
        <div>
            <table>
                <tbody>{renderPlayThemes(gameState, combination)}</tbody>
            </table>

            <div className={styles.scoreWrap}>
                {playersArray.map((player, index) => {
                    return (
                        <div key={index} className={styles.scoreItem}>
                            <img className={styles.imgScore} src={player.avatar ?? defaultAvatar} alt={player.name}/>
                            <div className={styles.scoreContent}>
                                <span className={styles.scoreText}>{player.name}</span>
                                <span className={styles.scoreNumber}>{player.score}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
