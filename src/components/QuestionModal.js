import style from "../styles/QuestionModal.module.css"
import { CSSTransition } from "react-transition-group";

export function QuestionModal(props) {

    console.log("Open modal")

    if (!props.isOpen) {
        return null
    }

    console.log("Open modal true")

    return (
        <CSSTransition
            in={true}
            timeout={4000}
            classNames={{ ...style }}>
            <div className={style.Modal} onClick={props.toogle}>
                <div className={style.content}>
                    {props.question}
                </div>
            </div>
        </CSSTransition>
    )
}