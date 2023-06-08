import classes from "./Welcome.module.css";

const Welcome = () => {
    return (
        <>
            <h1 className={classes.title}>Welcome!</h1>
            <p className={classes.p}>
                With this free Dictionary you can get word definitions! Feel
                free to use it! I used this{" "}
                <a
                    href="https://dictionaryapi.dev/"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Dictionary API
                </a>{" "}
                to create this app.
            </p>
        </>
    );
};

export default Welcome;
