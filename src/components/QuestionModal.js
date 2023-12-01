import style from '../styles/QuestionModal.module.css'
import { useCallback, useEffect, useState } from 'react'
import { firstGameInitialState } from '../state/ThemesReducer'
import { useDispatch, useSelector } from 'react-redux'
import { changeScore } from '../store/slices/gameSlice'

const playersCombinatiobArray = ['1', '2', '3']
const answersCombinationArray = ['p', 'm', 'Backspace']

export function QuestionModal({
    isOpen,
    modalClass,
    question,
    rowId,
    isClosedCatVideo,
    sberCatClass,
}) {
    const dispatch = useDispatch()
    const players = useSelector((state) => state.game.players)
    const [isShowVideo, setIsShowVideo] = useState(false)
    const [isVideoEnded, setVideoEnded] = useState(false)
    const [firstCombination, setFirstCombination] = useState('')
    const [secondCombination, setSecondCombination] = useState('')
    const pictureQuestion = question.picture
    const videoQuestion = question.video
    const sberCatQuestion = question.sberCat
    const headerContent = firstGameInitialState.find((item) => item.id === rowId)

    const handleChangeScore = useCallback(
        (e) => {
            if (isOpen) {
                if (e.repeat) return
                if (
                    playersCombinatiobArray.includes(e.key) &&
                    firstCombination !== e.key.toLowerCase()
                ) {
                    setFirstCombination(e.key.toLowerCase())
                    setSecondCombination('')
                }
                if (
                    answersCombinationArray.includes(e.key) &&
                    secondCombination !== e.key.toLowerCase() &&
                    firstCombination
                ) {
                    setSecondCombination(e.key.toLowerCase())
                    const score =
                        e.key.toLowerCase() === 'p'
                            ? question.cost
                            : e.key.toLowerCase() === 'm'
                              ? -question.cost
                              : 0
                    const payload = { ...players.find((player) => player.id === +firstCombination) }
                    console.log(payload, 'pay')
                    payload.score += score
                    dispatch(changeScore(payload))
                }

                if (firstCombination === e.key.toLowerCase()) {
                    setFirstCombination('')
                    setSecondCombination('')
                }
            }
        },
        [dispatch, firstCombination, isOpen, players, question.cost, secondCombination]
    )

    useEffect(() => {
        document.addEventListener('keydown', handleChangeScore)

        return () => {
            document.removeEventListener('keydown', handleChangeScore)
        }
    }, [handleChangeScore])

    useEffect(() => {
        if (!!videoQuestion) {
            setTimeout(() => {
                setIsShowVideo(true)
            }, 3200)
        }

        return () => {
            setIsShowVideo(false)
        }
    }, [videoQuestion])

    if (!isOpen) {
        return null
    }
    const changeVideoClass = () => {
        const video = document.getElementById('video')
        if (video) {
            video.classList.add(style.close)
            video.classList.remove(style.open)
        }

        const sberVideo = document.getElementById('sberVideo')
        if (sberVideo) {
            sberVideo.classList.add(style.close)
            sberVideo.classList.remove(style.open)
        }
    }

    const handleVideoEnded = () => {
        changeVideoClass()
        setTimeout(() => {
            setVideoEnded(true)
        }, 1300)
    }

    const modalClassName =
        modalClass === 'close' ? `${style.Modal} ${style.closeModal}` : style.Modal

    const renderQuestion = () => {
        if (!!pictureQuestion) {
            return (
                <div className={`${style.picWrapper} ${style[modalClass]}`}>
                    <img className={style.pic} src={pictureQuestion} alt={'pic'} />
                </div>
            )
        }

        if (sberCatQuestion) {
            if (isClosedCatVideo) {
                return (
                    <div className={`${style.content2} ${style[modalClass]}`}>
                        <div className={style.header}>
                            <span>{headerContent.theme}</span>
                            <span>{question.cost}</span>
                        </div>
                        <div className={style.body}>{question.question}</div>
                    </div>
                )
            }

            return (
                <video
                    id="sberVideo"
                    className={`${style.video} ${style[sberCatClass]}`}
                    src={sberCatQuestion}
                    autoPlay
                >
                    Sorry, your browser doesn't support embedded videos.
                </video>
            )
        }

        if (!!videoQuestion) {
            if (isVideoEnded) {
                return (
                    <div className={`${style.content2} ${style[modalClass]}`}>
                        <div className={style.header}>
                            <span>{headerContent.theme}</span>
                            <span>{question.cost}</span>
                        </div>
                        <div className={style.body}>{question.question}</div>
                    </div>
                )
            }

            if (isShowVideo) {
                return (
                    <video
                        id="video"
                        className={`${style.video} ${style[modalClass]}`}
                        onEnded={handleVideoEnded}
                        src={videoQuestion}
                        autoPlay
                    >
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                )
            }

            return (
                <div className={`${style.content2} ${style[modalClass]}`}>
                    <div className={style.header}>
                        <span>{headerContent.theme}</span>
                        <span>{question.cost}</span>
                    </div>
                    <div className={style.body}>ВНИМАНИЕ ВИДЕО ВОПРОС!</div>
                </div>
            )
        }

        return (
            <div className={`${style.content2} ${style[modalClass]}`}>
                <div className={style.header}>
                    <span>{headerContent.theme}</span>
                    <span>{question.cost}</span>
                </div>
                <div className={style.body}>{question.question}</div>
            </div>
        )
    }
    return <div className={modalClassName}>{renderQuestion()}</div>
}
