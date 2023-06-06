import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import { ThemeContext, ThemeContextObj } from "./context/theme-context";
import "./App.css";
// import classes from "./App.module.css";
import Search from "./components/Search";
import Result from "./components/Result";
import NoWordFound from "./components/NoWordFound";

function App() {
    const [searchedWordResult, setSearchedWordResult] = useState();
    const [theme, setTheme] = useState<ThemeContextObj>({
        isDark: false,
        fontType: "Raleway",
    });

    const themeHandler = () => {
        setTheme({
            ...theme,
            isDark: !theme.isDark,
        });
    };

    const familyChangeHandler = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setTheme({
            ...theme,
            fontType: event.target.value as ThemeContextObj["fontType"],
        });
    };

    const searchHandler = useCallback(async (word: string) => {
        let link = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
        const response = await fetch(link).then((response) => response.json());

        setSearchedWordResult(response);
        console.log(response);
    }, []);

    useEffect(() => {
        document.body.className = theme.isDark ? "dark" : "light";
    }, [theme.isDark]);

    return (
        <ThemeContext.Provider value={theme}>
            <main
                data-theme={`${theme.isDark ? "dark" : "light"}`}
                font-theme={theme.fontType}
            >
                {/* <main
                className={`${theme.isDark ? classes.dark : classes.light} ${
                    classes[theme.fontType]
                } data-theme="dark"`}
            > */}
                <Header
                    onSwitchClick={themeHandler}
                    onFamilyChangeHandler={familyChangeHandler}
                />
                <Search onSearch={searchHandler} />
                {searchedWordResult && "message" in searchedWordResult && (
                    <NoWordFound result={searchedWordResult} />
                )}
                {searchedWordResult && !("message" in searchedWordResult) && (
                    <Result result={searchedWordResult} />
                )}
                {!searchedWordResult && "Welcome!"}
            </main>
        </ThemeContext.Provider>
    );
}

export default App;
