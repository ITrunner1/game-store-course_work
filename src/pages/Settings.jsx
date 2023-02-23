import { useTranslation } from 'react-i18next';

const Settings = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => { 
        i18n.changeLanguage(language);
    }

    return (
        <div className="SettingsPage"> 
            <div className="Title">{t("settings")}</div>
            <div className='ChangeLanguage'>
                <span>{t("change language")}: </span>         
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('ru')}>Russian</button>
                <button onClick={() => changeLanguage('ger')}>Deutsch</button>
                <button onClick={() => changeLanguage('jap')}>日本</button>
                <button onClick={() => changeLanguage('chi')}>简体中文</button>
            </div>
            <div className="Title">{t("settings")}</div>
        </div>
    );
}

export default Settings;