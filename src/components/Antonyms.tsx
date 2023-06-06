import classes from "./Synonyms.module.css";

type AntonymsProps = {
    antonyms: string[];
};

const Antonyms = ({ antonyms }: AntonymsProps) => {
    return (
        <>
            <h4 className={classes.h4}>Antonyms:</h4>
            <p className={classes.p}>
                {antonyms.map((antonym, i) => {
                    let comma = "";
                    if (i > 0) {
                        comma = ", ";
                    }
                    return comma + antonym;
                })}
            </p>
        </>
    );
};

export default Antonyms;
