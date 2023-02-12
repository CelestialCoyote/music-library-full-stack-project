import React from 'react';
import './SearchBar.css';


const SearchBar = (props) => {

    let searchString = React.createRef();

    const startSearch = (event) => {
        props.handleSearch(searchString.current.value);
    };

    return (

        <div id='search-bar'>
            <label id='search-label'>Find Song</label>
            <input
                id='search-input'
                ref={searchString}
                onChange={startSearch}
                type='text'
                placeholder='Search by: Song Title, Ablum Name, Artist or Group Name, or Release Date'
            ></input>
        </div>

    );
};


export default SearchBar;
