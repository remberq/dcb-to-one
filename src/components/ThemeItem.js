import {useCallback, useEffect, useState} from 'react';
import styles from '../styles/ThemeItem.module.css';

import {batch, useDispatch, useSelector} from "react-redux";
import {setModalState, setQuestionFill} from "../store/slices/gameSlice";

export function ThemeItem({ theme, combination }) {
    const isSelectedRow = combination[0] === theme.id;

    const themeStyle = isSelectedRow ? styles.myDiv : '';

    return (
        <div
            className={`${styles.theme_item} ${themeStyle}`}
        >
            {theme.theme}1
        </div>
    );
}

export const QuestionItems = ({ question, combination, setOpenProcess }) => {
    const dispatch = useDispatch()
    const fill = useSelector((state) => state.game.filledQuestions)

    const isFilledQuestion = fill.includes(question.id)
    const isSelectedRowQuestion = combination === question.id;
    const questionStyle = isSelectedRowQuestion
        ? styles.question_animation
        : styles.item;

    useEffect(() => {
        if (isSelectedRowQuestion) {
            setOpenProcess(true)
            setTimeout(() => {
                if (isSelectedRowQuestion) {
                    batch(() => {
                        dispatch(setModalState({isOpen: true, modalClass: 'open', question: question}))
                        dispatch(setQuestionFill(combination))
                        setOpenProcess(false)
                    })
                }
            }, 2000);
        }

    }, [combination, dispatch, isSelectedRowQuestion, question]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            dispatch(setModalState({modalClass: 'close'}))
            setTimeout(() => {
                dispatch(setModalState({isOpen: false, modalClass: '', question: ''}))
            }, 1300);
        }
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className={!isFilledQuestion ? questionStyle : styles.deactivated}>
            {!isFilledQuestion ? (
                <label>{question.cost}</label>
            ) : (
                <label></label>
            )}
        </div>
    );
};
