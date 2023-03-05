import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { Transition } from '../components';
import { useAuth } from '../hooks/use-auth';
import HomeSlider from "../components/HomeSlider";


const Home = () => {    
    const { t } = useTranslation();
    const { isAuth, email } = useAuth();

    return isAuth ? (
        <Transition className="Home" direction="left">
            <h1>{t("home")}</h1>
            <div className="EmailTxt">{t("e-mail")}: {email}</div>
            <div className="slider-wrapper">            
                <HomeSlider />           
            </div>
        </Transition>
    ) : (
        <Transition className="HomeBlock" direction="left">
            <div>
                <h1>{t("no access")}</h1>
                <h2>{t("you need to register or login")}</h2>
                <Link className="LinkToLogin" to="/login">
                    <Button className="BtnLogin">{t("log in")}</Button>
                </Link>
                <Link className="LinkToLogin" to="/login">
                    <Button className="BtnLogin">{t("sign up")}</Button>
                </Link>
            </div>
        </Transition> 
    );
}

export default Home;