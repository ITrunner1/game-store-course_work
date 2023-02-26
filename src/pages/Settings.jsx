import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useAuth } from '../hooks/use-auth';
import { Transition } from '../components'; 

const Settings = () => {
    const { t, i18n } = useTranslation();
    const { isAuth } = useAuth();

    const changeLanguage = (language) => { 
        i18n.changeLanguage(language);
    }

    return isAuth ? (
        <div className="SettingsPage"> 
            <h1 className="Title">{t("settings")}</h1>
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
            <div className="ChooseTheme">{t("theme")}:</div>       
        </div>        
    ) : (
        <div className="SettingsPage">
            <Transition className="Container" direction = "up">
                <h2 className="Title">{t("settings are only available to registered users")}</h2>
                    <Link className="LinkToLogin" to="/login">
                        <Button className="BtnLogin">{t("log in")}</Button>
                    </Link>
                    <Link className="LinkToLogin" to="/login">
                        <Button className="BtnLogin">{t("sign up")}</Button>
                    </Link>
            </Transition>
        </div>
    );
}

export default Settings;