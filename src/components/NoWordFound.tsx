import classes from "./Source.module.css";

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
        <h5 className={classes.h5}>
            Oups! It seems, the word doesn't exists in the database.
            <br />
            The dictionary sends this message:
            <br />
            {result.title}
            <br />
            {result.message}
            <br />
            {result.resolution}
            <br />
        </h5>
    );
};

export default NoWordFound;
