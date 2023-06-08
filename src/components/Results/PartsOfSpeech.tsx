import classes from "./PartsOfSpeech.module.css";
import { Definition } from "./Result";

type PartOfSpeechProps = {
    definitions: Definition[];
};

const PartOfSpeech = ({ definitions }: PartOfSpeechProps) => {
    return (
        <>
            <h3 className={classes.h3}>Meaning:</h3>
            <ul className={classes.ul}>
                {definitions.map((def, i) => (
                    <li key={i}>
                        {def.definition}
                        {def.example && (
                            <p className={classes.example}>{def.example}</p>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default PartOfSpeech;
