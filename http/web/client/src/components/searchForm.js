import React from "react";

function SearchForm(props) {
    return (
        <form className="form offset-md-3">
            <input
                value={props.search}
                onChange={props.handleInputChange}
                type="text"
                placeholder="Search title"
            />
            <button onClick={props.handleFormSubmit}>Reset</button>
        </form>
    );
}


export default SearchForm;