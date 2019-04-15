import React from "react";

function Search(props) {
    return(
        <div id="searchContainer">
            <h3>Book Search</h3>
            <form id="bookSearch">
                <label>Book:</label>
                <br></br>
                <input 
                    id="bookInput"
                    type="text"
                    name="bookInput" 
                    form="bookSearch"
                    value={props.title} 
                    onChange={(event) => props.handleInputChange(event)}
                    placeholder="Title (required)"/>
                <br></br>
                <button type="submit" onClick={(event) => props.handleFormSubmit(event)}>Search</button>
            </form>
        </div>
    );
}

export default Search;