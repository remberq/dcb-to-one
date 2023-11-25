import { PlayField } from './PlayField';
import styles from '../styles/MainPage.module.css';

import { useSelector} from 'react-redux';
import {QuestionModal} from "./QuestionModal";

export function MainPage() {
    const modal = useSelector((state) => state.game.modalState)

    return (
        <>
            <div className={styles.inner}>
                <PlayField />
                <div className={styles.animation}></div>
            </div>
            <QuestionModal
                {...modal}
            />
        </>
    );
}
