import { useContext } from "react"
import styles from "../styles/ThemeItem.module.css"
import { ThemeContext } from "../state/ThemesReducer"
import useModal from "../hooks/OpenModal";
import { QuestionModal } from "./QuestionModal";

export function ThemeItem(props) {

    const { state, dispatch } = useContext(ThemeContext);
    const { isOpen, toggle } = useModal();

    if (props.theme) {
        console.log(props.theme)
        return (
            <div className={styles.theme_item} onClick={() => dispatch({
                type: "ADD_WORD",
                payload: props.theme.id
            })}>
                {props.theme.theme}
            </div>
        )
    } else {
        return (
            <div className={props.question.active ? styles.item : styles.deactivated} onClick={() => {
                toggle()
                dispatch({
                    type: "OPEN_QUESTION",
                    payload: {
                        id: props.question.id,
                        themeId: props.question.themeId
                    }
                })
            }}>
                {props.question.active ? <label>{props.question.cost}</label> : <label>Потрачено</label>}
                <QuestionModal isOpen={isOpen} toggle={toggle} question={props.question.question} />
            </div>
        )
    }
}