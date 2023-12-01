import { useCallback, useEffect } from 'react'
import { batch, useDispatch, useSelector } from 'react-redux'
import styles from '../styles/ThemeItem.module.css'

import { setModalState, setQuestionFill } from '../store/slices/gameSlice'

export function ThemeItem({ theme, combination }) {
    const isSelectedRow = combination[0] === theme.id

    const themeStyle = isSelectedRow ? styles.myDiv : ''
    const themeTextSize = theme.theme.length > 24 ? { fontSize: '25px' } : {}

    return (
        <div style={themeTextSize} className={`${styles.theme_item} ${themeStyle}`}>
            {theme.theme}
        </div>
    )
}

export function QuestionItems({ question, combination, setOpenProcess }) {
    const dispatch = useDispatch()
    const isClosedCatVideo = useSelector((state) => state.game.modalState.isClosedCatVideo)
    const fill = useSelector((state) => state.game.filledQuestions)

    const isFilledQuestion = fill.includes(question.id)
    const isSelectedRowQuestion = combination === question.id
    const questionStyle = isSelectedRowQuestion ? styles.question_animation : styles.item

    useEffect(() => {
        if (isSelectedRowQuestion && !isFilledQuestion) {
            setOpenProcess(true)
            const timer = setTimeout(() => {
                batch(() => {
                    dispatch(
                        setModalState({
                            isOpen: true,
                            modalClass: 'open',
                            question: question,
                            rowId: combination[0],
                        })
                    )
                    dispatch(setQuestionFill(combination))
                    setOpenProcess(false)
                })
            }, 2000)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [combination, dispatch, isSelectedRowQuestion, question, isFilledQuestion, setOpenProcess])

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Escape' && combination === question.id) {
                if (question.sberCat && !isClosedCatVideo) {
                    dispatch(setModalState({ sberCatClass: 'close' }))
                    setTimeout(() => {
                        dispatch(setModalState({ isClosedCatVideo: true }))
                    }, 1300)
                } else {
                    dispatch(setModalState({ modalClass: 'close' }))
                    setTimeout(() => {
                        dispatch(setModalState({ isOpen: false, modalClass: '', question: {} }))
                    }, 1300)
                }
            }
        },
        [combination, dispatch, isClosedCatVideo, question.id, question.sberCat]
    )

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    return (
        <div className={!isFilledQuestion ? questionStyle : styles.deactivated}>
            {!isFilledQuestion ? <label>{question.cost}</label> : <label />}
        </div>
    )
}
