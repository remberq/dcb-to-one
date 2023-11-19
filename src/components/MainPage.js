
import { useReducer } from "react";
import { PlayField } from "./PlayField";
import styles from "../styles/MainPage.module.css"
import { themeInitialState, ThemeContext, themeReducer } from "../state/ThemesReducer"


export function MainPage() {

    const [state, dispatch] = useReducer(themeReducer, themeInitialState);

    return (
        <ThemeContext.Provider value={{ dispatch, state }}>
            <div className={styles.page}>
                <PlayField />
            </div>
        </ThemeContext.Provider>
    )
}