import React from "react";

function Search(props) {
    return(
        <div id="searchContainer">
            <h3>Book Search</h3>
            <form id="bookSearch">
                <label>Book Title:</label>
                <br></br>
                <input 
                    id="bookInput"
                    name="bookInput"
                    type="text"
                    form="bookSearch" 
                    value={props.bookInput} 
                    onChange={props.handleInputChange}
                    placeholder="Title (required)"/>
                <br></br>
                <br></br>
                <button type="submit" onClick={props.handleFormSubmit}>Search</button>
            </form>
        </div>
    );
}

export default Search;