import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

import { getMenuStatus, setMenuOff } from '../redux/menuSlice';
import genres from '../utils/genres';
import { Transition } from '../components';

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
                className="Menu-hide-btn"
                onClick={closeMenu}
            >
               <IoIosCloseCircleOutline className="Icon" /> 
            </Button>
            <div className="MenuGenres">
                <div className="Genres-title">{t("all genres")}</div>
                <ul className="Genres-list">
                    {
                        genres.map((genre, idx) => { 
                            return (
                                <li key = {idx}>
                                    <Link to = {`genre/${genre}`} className="cat-list-link">{t(genre).replace("-", " ")}</Link>
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