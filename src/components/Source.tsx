import classes from "./Source.module.css";

type SourceProps = {
    sourceUrls: string[];
};

const Source = ({ sourceUrls }: SourceProps) => {
    if (sourceUrls.length === 0) {
        return null;
    }

    return (
        <h4 className={classes.h4}>
            {"Source: "}
            {sourceUrls.map((url, i) => (
                <a href={url} key={i} rel="noreferrer noopener" target="_blank">
                    {url}
                    <img src="external_link.png" alt="External Link"></img>
                </a>
            ))}
        </h4>
    );
};

export default Source;
