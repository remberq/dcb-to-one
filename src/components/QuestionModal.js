import style from '../styles/QuestionModal.module.css';
import {useEffect, useState} from "react";

export function QuestionModal({ isOpen, modalClass, question }) {
    const [isShowVideo, setIsShowVideo] = useState(false)
    const pictureQuestion = question.picture
    const videoQuestion = question.video

    useEffect(() => {
        if (!!videoQuestion) {
            setTimeout(() => {
                setIsShowVideo(true)
            }, 3000)
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

        return <div className={`${style.content} ${style[modalClass]}`}>
            {question.question}
        </div>
    }
    return (
            <div className={modalClassName}>
                    {renderQuestion()}
            </div>
    );
}
