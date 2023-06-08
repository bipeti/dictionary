import classes from "./Meanings.module.css";
import { Meaning } from "./Result";
import PartOfSpeech from "./PartsOfSpeech";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

type ResultMainProps = {
    meanings: Meaning[];
};

const Meanings = ({ meanings }: ResultMainProps) => {
    return (
        <ul className={classes.ul}>
            {meanings.map((meaning, i) => (
                <li key={i}>
                    <h2>{meaning.partOfSpeech}</h2>
                    {<PartOfSpeech definitions={meaning.definitions} />}
                    {meaning.synonyms.length !== 0 && (
                        <Synonyms synonyms={meaning.synonyms} />
                    )}
                    {meaning.antonyms.length !== 0 && (
                        <Antonyms antonyms={meaning.antonyms} />
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Meanings;
