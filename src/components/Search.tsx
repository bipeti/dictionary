import classes from "./Search.module.css";
import { useRef } from "react";

type SearchProps = {
    onSearch: (searchText: string) => void;
};

const Search = ({ onSearch }: SearchProps) => {
    const searchRef = useRef<HTMLInputElement>(null);
    const searchHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredSearchText = searchRef.current!.value;
        if (enteredSearchText !== "") {
            onSearch(enteredSearchText);
        }
    };

    return (
        <form className={classes.search_field} onSubmit={searchHandler}>
            <input
                type="text"
                name="search"
                placeholder="Search.."
                ref={searchRef}
                className={classes.input}
            />
            <button type="submit" className={classes.button}>
                <img
                    alt="Search"
                    src="searchicon.png"
                    className={classes.img}
                />
            </button>
        </form>
    );
};

export default Search;
