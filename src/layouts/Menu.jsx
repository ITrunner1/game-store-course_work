import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

import { getMenuStatus, setMenuOff } from '../redux/menuSlice';
import genres from '../utils/genres';

const Menu = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isMenuOn = useSelector(getMenuStatus);
    
    const closeMenu = () => {
        dispatch(setMenuOff());        
    };   

    return (
        
        <aside className={`Menu ${isMenuOn ? 'hide-menu' : ""}`}>
            <Button 
                type="button"
                className="MenuHideBtn"
                onClick={closeMenu}
            >
               <IoIosCloseCircleOutline className="Icon" /> 
            </Button>
            <div className="MenuGenres">
                <div className="GenresTitle">{t("all genres")}</div>
                <ul className="GenresList">
                    {
                        genres.map((genre, idx) => { 
                            return (
                                <li key = {idx}>
                                    <Link to = {`genre/${genre}`}>{t(genre).replace("-", " ")}</Link>
                                </li>
                            )
                    })
                    }
                </ul>
            </div>
            </aside>       
            
    );
}

export default Menu;