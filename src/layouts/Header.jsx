import { IoCartOutline, IoListSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

import logo from '../assets/logo.png';
import Search from '../components/Search';
import { setMenuOn, setMenuOff } from '../redux/menuSlice';
import { getMenuStatus } from '../redux/menuSlice';


function Header() {    
    const { t } = useTranslation();
    const dispatch = useDispatch(); 
    
    return (        
        <div className="Header">
            <div className="Left">
                <div className="Logo">
                    <img src={logo} className="Image" alt="logo" />
                </div>
                <span className="store-name">Game Stop</span>                    
            </div>
            <div className="Middle">                                        
                <Search />   
                <Button 
                    type="button"
                    className="HeaderMenuButton" 
                    onClick = {() => dispatch(setMenuOn())}
                >
                    <IoListSharp className="Icon" />
                </Button>                
            </div>
            <div className="Right">
                <span className="reg">{t("register")}</span>
                <div className="VertLine"></div>
                <span className="reg">{t("log in")}</span>
                <div className = "cart">
                    <Link to = "/cart" className="CartBtn">
                        <IoCartOutline className='Icon' />
                        <div className = "CartItems-value">0</div>
                    </Link>
                </div>
            </div>
        </div>
       
    );
}

export default Header;