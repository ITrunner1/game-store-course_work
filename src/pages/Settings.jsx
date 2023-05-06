import { ButtonGroup, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Transition } from '../components'; 
import { useTheme } from '../hooks/use-theme'

const Settings = () => {    
    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useTheme();         

    const changeLanguage = (language) => { 
        i18n.changeLanguage(language);
    }

    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    return (
        <div className="SettingsPage"> 
            <Transition className="Container" direction = "left">
                <h1 className="Title">{t("settings")}</h1>
                <div className='ChangeLanguage'>
                    <span>{t("change language")}: </span> 
                    <ButtonGroup varian="contained" aria-label="outlined button group">        
                        <Button onClick={() => changeLanguage('en')}>English</Button>
                        <Button onClick={() => changeLanguage('ru')}>Русский</Button>
                        <Button onClick={() => changeLanguage('ger')}>Deutsch</Button>
                        <Button onClick={() => changeLanguage('jap')}>日本</Button>
                        <Button onClick={() => changeLanguage('chi')}>简体中文</Button>
                    </ButtonGroup>
                </div> 
                <div className="ChangeTheme">
                    <span>{t("theme")}: </span>
                    <ButtonGroup varian="contained" aria-label="outlined button group">
                        <Button onClick={handleDarkThemeClick}>{t("dark")}</Button>
                        <Button onClick={handleLightThemeClick}>{t("light")}</Button>
                    </ButtonGroup>
                </div>
            </Transition>                    
        </div>        
    )     
}

export default Settings;