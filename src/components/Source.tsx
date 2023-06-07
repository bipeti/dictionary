import classes from "./Source.module.css";

type SourceProps = {
    sourceUrls: string[];
};

const Source = ({ sourceUrls }: SourceProps) => {
    if (sourceUrls.length === 0) {
        return null;
    }

    return (
        <h5 className={classes.h5}>
            {"Source: "}
            {sourceUrls.map((url, i) => (
                <a href={url} key={i} rel="noreferrer noopener" target="_blank">
                    {url}
                    <img src="external_link.png" alt="External Link"></img>
                </a>
            ))}
        </h5>
    );
};

export default Source;
