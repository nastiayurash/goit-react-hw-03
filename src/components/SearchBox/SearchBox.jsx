
import css from "./SearchBox.module.css"

const SearchBox = ({ value, onSearch }) => {
    
    return (
        <div className={css.boxWrapper}>
            <p className={css.label}> Find contacts by name</p>
            <input className={css.input} id="searchBox" name="search" type="text" value={value} onChange={e=>onSearch(e.target.value)} />
        </div>
    );
};
export default SearchBox;