// import classes from "./Result.module.css";

import ResultMain from "./ResultMain";
import Source from "./Source";
import Meanings from "./Meanings";

export type Pronunciation = {
    text: string;
    audio: string;
    sourceUrl: string;
    license: {
        name: string;
        url: string;
    };
};

export type Definition = {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example: string;
};

export type Meaning = {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
};

export type WordResult = {
    word: string;
    phonetic: string;
    phonetics: Pronunciation[];
    meanings: Meaning[];
    license: {
        name: string;
        url: string;
    };
    sourceUrls: string[];
};

type ResultProps = {
    result: WordResult[];
};

const Result = ({ result }: ResultProps) => {
    return (
        <>
            <ResultMain
                word={result[0].word}
                phonetic={result[0].phonetic}
                phonetics={result[0].phonetics}
            />
            <Meanings meanings={result[0].meanings} />
            <Source sourceUrls={result[0].sourceUrls} />
        </>
    );
};

export default Result;
