import { useTranslation } from 'react-i18next';
import { IoSearch } from 'react-icons/io5';
import { useMediaQuery } from '@mui/material';

function Search() {
    const { t } = useTranslation();
    const matches = useMediaQuery('(max-width: 600px)');
    return (
        <form className = "search">
            <IoSearch className="icon" />
            <input 
                type="text"
                placeholder={t("search the store")}
                className='input'
                spellcheck="false"
                name="query"
                />                
        </form>   
             
    );
}

export default Search;