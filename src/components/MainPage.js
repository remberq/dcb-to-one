import { PlayField } from './PlayField'
import styles from '../styles/MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { QuestionModal } from './QuestionModal'
import { useCallback, useEffect, useRef, useState } from 'react'
import { changeGameState } from '../store/slices/gameSlice'

import { FinalGame } from './FinalGame'

export function MainPage() {
    const [videoType, setVideoType] = useState('question')
    const [isGameEnded, setGameEnded] = useState(false)
    const dispatch = useDispatch()
    const modal = useSelector((state) => state.game.modalState)
    const combinationNextTheme = useRef([])

    useEffect(() => {
        localStorage.setItem('field', '1')
    }, [])

    const handleKeyDown = useCallback(
        (e) => {
            if (e.repeat) return
            if (e.key === 'Shift') {
                combinationNextTheme.current = [...combinationNextTheme.current, e.key]
                if (combinationNextTheme.current.length === 3) {
                    const indexOfQuestion = +localStorage.getItem('field') + 1
                    if (indexOfQuestion > 3) {
                        setGameEnded(true)
                        return
                    }
                    localStorage.setItem('field', `${indexOfQuestion}`)
                    dispatch(changeGameState(indexOfQuestion))
                    combinationNextTheme.current = []
                }
            }
            if (e.key.toLowerCase() === 'a') {
                setVideoType('answer')
            }

            if (e.key === 'Enter') {
                const video = document.getElementById('lastVideo')
                video && video.play()
            }
        },
        [dispatch, videoType]
    )

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    return (
        <>
            <div className={styles.inner}>
                {isGameEnded ? <FinalGame videoType={videoType} /> : <PlayField />}

                <div className={styles.animation}></div>
            </div>
            {modal.isOpen && <QuestionModal {...modal} />}
        </>
    )
}
