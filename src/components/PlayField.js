import { ThemeItem, QuestionItems } from './ThemeItem';
import styles from '../styles/PlayField.module.css';
import {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const mainArr = ['q', 'w', 'e', 'r'];
const questionArr = ['1', '2', '3', '4'];

export function PlayField() {
    const [isOpenProcess, setOpenProcess] = useState(false)
    const gameState = useSelector((state) => state.game.gameState)
    const isModalOpen = useSelector((state) => state.game.modalState.isOpen)
    const [combinationOne, setCombinationOne] = useState('');
    const [combinationTwo, setCombinationTwo] = useState('');

    const handleKeyDown = useCallback((e) => {
        if (e.repeat) return;
        if (!isModalOpen && !isOpenProcess) {
            if (
                mainArr.includes(e.key.toLowerCase()) &&
                combinationOne !== e.key.toLowerCase()
            ) {
                setCombinationOne(e.key.toLowerCase());
                setCombinationTwo('');
            }
            if (
                questionArr.includes(e.key.toLowerCase()) &&
                combinationTwo !== e.key.toLowerCase()
            ) {
                setCombinationTwo(e.key.toLowerCase());
            }

            if (combinationOne === e.key.toLowerCase()) {
                setCombinationOne('');
            }
            if (combinationTwo === e.key.toLowerCase()) {
                setCombinationTwo('');
            }
        }
    }, [combinationOne, combinationTwo, isModalOpen, isOpenProcess]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    const combination = combinationOne + combinationTwo;

    const renderPlayThemes = (themes, combination) => {
        return themes.map((theme) => (
            <tr key={theme.id} className={styles.row}>
                <td>
                    <ThemeItem combination={combination} theme={theme} />
                </td>

                {theme.questions.map((question) => (
                    <td key={question.id}>
                        <QuestionItems
                            combination={combination}
                            question={question}
                            setOpenProcess={setOpenProcess}
                        />
                    </td>
                ))}
            </tr>
        ));
    };
    return (
        <div>
            <table>
                <tbody>{renderPlayThemes(gameState, combination)}</tbody>
            </table>
        </div>
    );
}
