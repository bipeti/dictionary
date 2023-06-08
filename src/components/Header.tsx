import { useContext } from "react";
import classes from "./Header.module.css";
import { ThemeContext } from "../context/theme-context";

type AppProps = {
    onSwitchClick: () => void;
    onFamilyChangeHandler: (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => void;
};

const Header = ({ onSwitchClick, onFamilyChangeHandler }: AppProps) => {
    const theme = useContext(ThemeContext);

    return (
        <div className={classes.header}>
            <img
                alt="dictionary-icon"
                src="dictionary.ico"
                className={classes["header-icon"]}
            />
            <label className={classes["header-label-fonttype"]}>
                <select id="family-change" onChange={onFamilyChangeHandler}>
                    <option value="Raleway">Raleway</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Poppins">Poppins</option>
                </select>
            </label>
            <input
                type="checkbox"
                id="darkmode-toggle"
                className={classes["header-input-checkbox"]}
                onClick={onSwitchClick}
                checked={theme.isDark}
            />
            <label
                htmlFor="darkmode-toggle"
                className={classes["header-label-checkbox"]}
            >
                <img src="sun.png" alt="sun" className={classes.sun}></img>
                <img src="moon.png" alt="moon" className={classes.moon}></img>
            </label>
        </div>
    );
};

export default Header;
