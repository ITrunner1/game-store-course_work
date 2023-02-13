import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { useMediaQuery } from '@mui/material';

function Search() {
    const matches = useMediaQuery('(max-width: 600px)');
    return (
        <form className = "search">
            <IoSearch className="icon" />
            <input 
                type="text"
                placeholder={matches ? 'Seacrh' : 'Search the store'}
                className='input'
                spellcheck="false"
                name="query"
                />                
        </form>   
             
    );
}

export default Search;