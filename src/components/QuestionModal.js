import style from '../styles/QuestionModal.module.css';
import {useEffect, useState} from "react";
import {themeInitialState} from "../state/ThemesReducer";

export function QuestionModal({ isOpen, modalClass, question, rowId }) {
    const [isShowVideo, setIsShowVideo] = useState(false)
    const pictureQuestion = question.picture
    const videoQuestion = question.video
    const musicQuestion = question.music
    const isAudioMuted = modalClass === 'close'
    const headerContent = themeInitialState.find((item) => item.id === rowId)

    useEffect(() => {
        if (!!videoQuestion) {
            setTimeout(() => {
                setIsShowVideo(true)
            }, 3200)
        }

        return () => {
            setIsShowVideo(false)
        }
    }, [videoQuestion]);

    if (!isOpen) {
        return null;
    }


    const modalClassName =
        modalClass === 'close'
            ? `${style.Modal} ${style.closeModal}`
            : style.Modal;
    const renderQuestion
        = () => {
        if (pictureQuestion) {
            return <div className={`${style.picWrapper} ${style[modalClass]}`}><img className={style.pic} src={pictureQuestion} alt={'pic'} /></div>
        }

        if (!!videoQuestion) {
                return (
                    <div className={`${style.videoPreview} ${style[modalClass]}`}>
                        {isShowVideo ? (
                            <video className={style.video} src={videoQuestion} autoPlay >
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        ) : (
                            <div>
                                ВНИМАНИЕ! Видео вопрос!
                            </div>
                        )}
                    </div>
                )
            }

        return (
            <div className={`${style.content2} ${style[modalClass]}`}>
                <div className={style.header}>
                    <span>{headerContent.theme}</span>
                    <span>{question.cost}</span>
                </div>
                <div className={style.body}>
                    {question.question}
                </div>

            </div>
        )
    }
    return (
            <div className={modalClassName}>
                {renderQuestion()}
                {musicQuestion && (
                    <audio controls={false} autoPlay muted={isAudioMuted}>
                        <source src={musicQuestion} type="audio/mp3" />
                            Your browser does not support the audio element.
                    </audio>
                )}
            </div>
    );
}
