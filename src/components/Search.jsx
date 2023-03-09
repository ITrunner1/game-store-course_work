import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoSearch } from 'react-icons/io5';

function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTerm = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }
    const { t } = useTranslation();    

    return (
        <Link to = {`/search/${searchTerm}`}> 
        <div className = "search"> 
            <IoSearch className="icon" />  
            <input             
                type="text"
                placeholder={t("search the store")}
                className='input'   
                onChange={(e) => handleSearchTerm(e)}                          
                >                 
                </input>
                                     
        </div>  
        </Link> 
             
    );
}

export default Search;