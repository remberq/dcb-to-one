import { ThemeItem } from "./ThemeItem"
import styles from "../styles/PlayField.module.css"
import { useContext } from "react";
import { ThemeContext } from "../state/ThemesReducer"

const renderPlayThemes = (themes) => {

    return themes.map(theme => (
        <tr className={styles.row}>

            <td>
                <ThemeItem theme={theme}/>
            </td>

            {theme.questions.map(question => (
                <td><ThemeItem question={question} /></td>
            ))}

        </tr>
    ))
}

export function PlayField(props) {

    const { state, dispatch } = useContext(ThemeContext);

    return (
        <div>
            <table>
                <tbody>
                    {renderPlayThemes(state)}
                </tbody>
            </table>
        </div>
    )
}