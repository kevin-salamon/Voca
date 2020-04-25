import React from "react";

function SearchForm(props) {
    return (
        <form className="form offset-md-3 search-form">
            <input
                className="form-input"
                value={props.search}
                onChange={props.handleInputChange}
                type="text"
                placeholder="Search"
            />
            <button className="reset-button" onClick={props.handleFormSubmit}>Reset</button>
        </form>
    );
}


export default SearchForm;