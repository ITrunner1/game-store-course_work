import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAuth } from '../hooks/use-auth';
import Transition from "../components/Transition";

const Landing = () => {
    const { t, i18n } = useTranslation();  
    const { isAuth } = useAuth();    
    
    const changeLanguage = (language) => { 
        i18n.changeLanguage(language);
    }

    return isAuth ? (
        <div className="LandingPage">
            <Transition direction = "up">
                <h2 className="Title">Game Stop</h2>    
                <h3 className="Txt">{t("don't overpay for games")}</h3>     
                <h4>{t("you are already logged in")}</h4>         
                <h4 className="GoToStore">
                    <Link to="/store">
                        {t("go to store")}
                    </Link>
                </h4>                  
            </Transition>
        </div>             
    ) : (
        <div className="LandingPage">
            <Transition direction = "up">
                <h2 className="Title">Game Stop</h2>    
                <h3 className="Txt">{t("don't overpay for games")}</h3>
                <div className="Buttons">
                    <Link to="/login">
                        <Button className="PrimaryButton">{t("log in")}</Button>
                    </Link>
                    <Link to="/signup">
                        <Button className="PrimaryButton" id="reg_btn"><span>{t("sign up")}</span></Button>
                    </Link>
                </div>
                <h4 className="GoToStore">
                    <Link to="/store">
                        {t("go to store without auth")}
                    </Link>
                </h4>
                <div className='ChangeLanguage'>
                    <span>{t("change language")}: </span> 
                    <ButtonGroup varian="contained" aria-label="outlined button group">        
                        <Button onClick={() => changeLanguage('en')}>English</Button>
                        <Button onClick={() => changeLanguage('ru')}>Russian</Button>
                        <Button onClick={() => changeLanguage('ger')}>Deutsch</Button>
                        <Button onClick={() => changeLanguage('jap')}>日本</Button>
                        <Button onClick={() => changeLanguage('chi')}>简体中文</Button>
                    </ButtonGroup>
                </div>    
            </Transition>
        </div>
    );    
}

export default Landing;