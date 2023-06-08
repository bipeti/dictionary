import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import { ThemeContext, ThemeContextObj } from "./context/theme-context";
import "./App.css";
import Search from "./components/Search";
import Result from "./components/Result";
import NoWordFound from "./components/NoWordFound";
import Error from "./components/Error";
import Welcome from "./components/Welcome";

function App() {
    const [searchedWordResult, setSearchedWordResult] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const [theme, setTheme] = useState<ThemeContextObj>({
        isDark: prefersDark,
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
        await fetch(link)
            .then((response) => response.json())
            .then((response) => {
                setSearchedWordResult(response);
                console.log(response);
            })
            .catch((err) => setErrorMessage(err.message));
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
                <Header
                    onSwitchClick={themeHandler}
                    onFamilyChangeHandler={familyChangeHandler}
                />
                <Search onSearch={searchHandler} />
                {errorMessage && <Error message={errorMessage} />}
                {!errorMessage &&
                    searchedWordResult &&
                    "message" in searchedWordResult && (
                        <NoWordFound result={searchedWordResult} />
                    )}
                {!errorMessage &&
                    searchedWordResult &&
                    !("message" in searchedWordResult) && (
                        <Result result={searchedWordResult} />
                    )}
                {!errorMessage && !searchedWordResult && <Welcome />}
            </main>
        </ThemeContext.Provider>
    );
}

export default App;
