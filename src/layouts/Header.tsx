import { IoCartOutline, IoListSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import Search from '../components/Search';
import { setMenuOn } from '../redux/Store/menuSlice';
import { getMenuStatus } from '../redux/Store/menuSlice';

function Header() {

    const dispatch = useDispatch();
    
    return (
        <div>
            <header className="header">
                <section className="left">
                    <div className="logo">
                        <img src={logo} className="image" alt="logo" />
                    </div>
                    <span className="store-name">Game Stop</span>                    
                </section>
                <section className="middle">                                        
                    <button 
                        type="button"
                        className="sidebar-show-btn" 
                        onClick = {() => dispatch(setMenuOn())}
                    ><IoListSharp /></button>
                    <Search />                 
                </section>
                <section className="right">
                    <span className="reg">Register</span>
                    <div className="vert-line"></div>
                    <span className="reg">Log in</span>
                    <div className = "cart">
                        <Link to = "" className="cart-btn">
                            <IoCartOutline />
                            <div className = "cart-items-value">0</div>
                        </Link>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default Header;