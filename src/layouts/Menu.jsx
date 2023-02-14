import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoListSharp } from 'react-icons/io5';
import { getMenuStatus, setMenuOff } from '../redux/Store/menuSlice';
import genres from '../utils/genres';

const Menu = () => {

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
                <div className="cat-title">All Genres</div>
                <ul className="cat-list">
                    {
                        genres.map((genre, idx) => { 
                            return (
                                <li key = {idx}>
                                    <Link to = {`genre/${genre}`} className="cat-list-link">{genre.replace("-", " ")}</Link>
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