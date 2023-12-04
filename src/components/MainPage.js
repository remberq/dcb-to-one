import { PlayField } from './PlayField'
import styles from '../styles/MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { QuestionModal } from './QuestionModal'
import { useCallback, useEffect, useRef, useState } from 'react'
import { changeGameState } from '../store/slices/gameSlice'
import { FinalGame } from './FinalGame'
import { getLocalStorageData, setLocalStorageData } from '../utils'
import { allPlayers } from '../state/playesState'
import { allGameTheme } from '../state/themesState'

export function MainPage() {
    const [videoType, setVideoType] = useState('question')
    const [isGameEnded, setGameEnded] = useState(false)
    const dispatch = useDispatch()
    const modal = useSelector((state) => state.game.modalState)
    const combinationNextTheme = useRef([])
    const combinationReset = useRef(0)
    const isEnded = getLocalStorageData('isGameEnded')
    useEffect(() => {
        !getLocalStorageData('field') && setLocalStorageData('1', 'field', 'Primitive')
        if (!getLocalStorageData('players')) {
            setLocalStorageData(allPlayers[1], 'players', 'Array')
        }
        if (!getLocalStorageData('themes')) {
            setLocalStorageData(allGameTheme[1], 'themes', 'Array')
        }
    }, [])

    const handleKeyDown = useCallback(
        (e) => {
            if (e.repeat) return
            if (e.key === 'Enter') {
                combinationReset.current += 1
                if (combinationReset.current === 3) {
                    localStorage.clear()
                    window.location.reload()
                } else if (combinationReset.current > 3) {
                    combinationReset.current = 0
                }
            }
            if (e.key === 'Shift') {
                combinationNextTheme.current = [...combinationNextTheme.current, e.key]
                if (combinationNextTheme.current.length === 3) {
                    const indexOfQuestion = +getLocalStorageData('field') + 1
                    if (indexOfQuestion > 3) {
                        setGameEnded(true)
                        setLocalStorageData(true, 'isGameEnded', 'Primitive')
                        return
                    }
                    dispatch(changeGameState(indexOfQuestion))
                    combinationNextTheme.current = []
                    setLocalStorageData(`${indexOfQuestion}`, 'field', 'Primitive')
                    setLocalStorageData('', 'combinationOne', 'Primitive')
                    setLocalStorageData('', 'combinationTwo', 'Primitive')
                    setLocalStorageData(allPlayers[indexOfQuestion], 'players', 'FULL')
                    setLocalStorageData(allGameTheme[indexOfQuestion], 'themes', 'FULL')
                    setLocalStorageData([], 'fill', 'FULL')
                    setLocalStorageData(
                        {
                            isOpen: false,
                            modalClass: '',
                            question: '',
                            rowId: '',
                            isClosedCatVideo: false,
                            sberCatClass: '',
                        },
                        'modalState',
                        'FULL'
                    )
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
                {isEnded || isGameEnded ? <FinalGame videoType={videoType} /> : <PlayField />}

                <div className={styles.animation}></div>
            </div>
            {modal.isOpen && <QuestionModal {...modal} />}
        </>
    )
}
