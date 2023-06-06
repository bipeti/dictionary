import classes from "./Synonyms.module.css";

type SynonymsProps = {
    synonyms: string[];
};

const Synonyms = ({ synonyms }: SynonymsProps) => {
    return (
        <>
            <h4 className={classes.h4}>Synonyms:</h4>
            <p className={classes.p}>
                {synonyms.map((synonym, i) => {
                    let comma = "";
                    if (i > 0) {
                        comma = ", ";
                    }
                    return comma + synonym;
                })}
            </p>
        </>
    );
};

export default Synonyms;
