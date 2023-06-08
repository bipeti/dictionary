import classes from "./InformationPages.module.css";

type ErrorProps = {
    message: string;
};

const Error = ({ message }: ErrorProps) => {
    return (
        <>
            <h1 className={classes.title}>Error</h1>
            <p className={classes.p}>
                Oops! Something went wrong:
                <br />
                {message}
                <br />
                <br />
                Please try again later!
            </p>
        </>
    );
};

export default Error;
