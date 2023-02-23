import { ButtonGroup, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Settings = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => { 
        i18n.changeLanguage(language);
    }

    return (
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
    );
}

export default Settings;