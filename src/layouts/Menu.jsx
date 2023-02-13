import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoListSharp } from 'react-icons/io5';
import { getMenuStatus, setMenuOff } from '../redux/Store/menuSlice';
import categories from '../utils/categories';

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
                <div className="cat-title">All Categories</div>
                <ul className="cat-list">
                    {
                        categories.map((category, idx) => { 
                            return (
                                <li key = {idx}>
                                    <Link to = {`category/${category}`} className="cat-list-link">{category.replace("-", " ")}</Link>
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