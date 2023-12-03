import styles from '../styles/FinalGame.module.css'
import style from '../styles/QuestionModal.module.css'
import finalQuestion from '../assets/cat/END-Loevskaya/Лоевская_вопрос.mp4'
import finalAnswerQuestion from '../assets/cat/END-Loevskaya/Лоевская_ответ.mp4'
import { useCallback, useEffect, useState } from 'react'

export const FinalGame = ({ videoType }) => {
    const [isOpenVideo, setOpenVideo] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const videos = {
        question: finalQuestion,
        answer: finalAnswerQuestion,
    }

    const handleKeyDown = useCallback((e) => {
        if (e.repeat) return

        if (e.key.toLowerCase() === 'q') {
            setIsActive(true)
            setTimeout(() => {
                setOpenVideo(true)
            }, 2000)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    const renderVideo = () => {
        return (
            <video id="lastVideo" autoPlay className={`${style.video}`} src={videos[videoType]}>
                Sorry, your browser doesnt support embedded videos.
            </video>
        )
    }
    return (
        <>
            {isOpenVideo ? (
                renderVideo()
            ) : (
                <div className={`${styles.content} ${isActive ? styles.contentAnimated : ''}`}>
                    Финальная игра
                </div>
            )}
        </>
    )
}
