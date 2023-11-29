import { PlayField } from './PlayField';
import styles from '../styles/MainPage.module.css';

import {useDispatch, useSelector} from 'react-redux';
import {QuestionModal} from "./QuestionModal";
import {useCallback, useEffect, useRef, useState} from "react";
import {changeGameState} from "../store/slices/gameSlice";

export function MainPage() {
    const [isGameEnded, setGameEnded] = useState(false)
    const dispatch = useDispatch()
    const modal = useSelector((state) => state.game.modalState)
    const combinationNextTheme = useRef([])

    useEffect(() => {
        localStorage.setItem('field', '0')
    }, [])

    const handleShiftDown = useCallback((e) => {
        if (e.key === 'Shift') {
            combinationNextTheme.current = [...combinationNextTheme.current, e.key]
            if (combinationNextTheme.current.length === 3) {
                const indexOfQuestion = +localStorage.getItem('field') + 1
                if (indexOfQuestion > 2) {
                    setGameEnded(true)
                    return;
                }
                localStorage.setItem('field', `${indexOfQuestion}`)
                dispatch(changeGameState(indexOfQuestion))
                combinationNextTheme.current = []
            }
        }

    }, [dispatch])

    useEffect(() => {
        document.addEventListener('keydown', handleShiftDown)
    }, [handleShiftDown]);

    return (
        <>
            <div className={styles.inner}>
                {isGameEnded ? (
                    <div className={styles.gameEnd}>Thank for Game</div>
                ) : (
                    <PlayField />
                )}

                <div className={styles.animation}></div>
            </div>
            <QuestionModal
                {...modal}
            />
        </>
    );
}
