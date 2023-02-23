import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoListSharp } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import { getMenuStatus, setMenuOff } from '../redux/menuSlice';
import genres from '../utils/genres';

const Menu = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isMenuOn = useSelector(getMenuStatus);   

    return (
        <aside className={`menu ${isMenuOn ? 'hide-menu' : ""}`}>
            <button 
                type="button"
                className="menu-hide-btn"
                onClick={() => dispatch(setMenuOff())}
            >
               <IoListSharp /> 
            </button>
            <div className="menu-cat">
                <div className="cat-title">{t("all genres")}</div>
                <ul className="cat-list">
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