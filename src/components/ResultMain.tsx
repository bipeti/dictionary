import classes from "./ResultMain.module.css";
import { Pronunciation } from "./Result";

type ResultMainProps = {
    word: string;
    phonetic: string;
    phonetics: Pronunciation[];
};

const ResultMain = ({ word, phonetic, phonetics }: ResultMainProps) => {
    const getAudioFromPhonetics = (
        phonetics: Pronunciation[]
    ): string | undefined => {
        const phoneticWithAudio = phonetics.find(
            (phonetic) => !!phonetic.audio
        );
        return phoneticWithAudio?.audio;
    };

    let audioLink = getAudioFromPhonetics(phonetics);
    let audio: HTMLAudioElement | undefined = undefined;
    if (typeof audioLink === "string") {
        audio = new Audio(audioLink);
    }
    const start = () => {
        if (audio) {
            audio.play();
        }
    };

    return (
        <div className={classes.outerdiv}>
            <div className={classes.innerdiv}>
                <h1>{word}</h1>
                <p className={classes.phonetic}>{phonetic}</p>
            </div>
            <div className={classes.innerdiv}>
                {audioLink && (
                    <div
                        className={classes["play-button"]}
                        onClick={start}
                    ></div>
                )}
            </div>
        </div>
    );
};

export default ResultMain;
