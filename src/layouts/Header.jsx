import { IoCartOutline, IoListSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

import logo from '../assets/logo.png';
import Search from '../components/Search';
import { removeUser } from '../redux/userSlice';
import { useAuth } from '../hooks/use-auth';
import { setMenuOn, setMenuOff } from '../redux/menuSlice';
import { getMenuStatus } from '../redux/menuSlice';


function Header() {    
    const { t } = useTranslation();
    const dispatch = useDispatch(); 

    const { isAuth, email } = useAuth();
    
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
                {isAuth ?
                    <Button 
                        className="ExitButton"
                        onClick={() => dispatch(removeUser())}                        
                        >
                            
                            Exit from Account
                        </Button> 
                 : <>
                 <span className="reg">                     
                     <Link to = "/signup">
                         {t("register")}
                     </Link>
                     </span>
                 <div className="VertLine"></div>
                 <span className="reg">
                     <Link to = "/login">
                         {t("log in")}
                     </Link>
                 </span>  
                 </>
                
                }
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