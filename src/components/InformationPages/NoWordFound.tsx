import classes from "./InformationPages.module.css";

export type MissingResult = {
    title: string;
    message: string;
    resolution: string;
};

type NoWordFoundProps = {
    result: MissingResult;
};

const NoWordFound = ({ result }: NoWordFoundProps) => {
    return (
        <>
            <h1 className={classes.title}>Missing!</h1>
            <p className={classes.p}>
                It seems, the word doesn't exists in the database.{" "}
                <a
                    href="https://dictionaryapi.dev/"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    The Dictionary API
                </a>{" "}
                sends this message:
                <br />
                <br />
                {result.title}
                <br />
                {result.message}
                <br />
                {result.resolution}
            </p>
        </>
    );
};

export default NoWordFound;
