import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from 'react-i18next';

import { setUser } from "../redux/userSlice";
import { Form } from '../components/Account/Form';
import { Transition } from '../components';

const LogIn = () => {    
    const dispatch = useDispatch(); 
    const navigate = useNavigate();   
    const { t } = useTranslation();   

    const handleLogin = (email, password) => { 
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
            }))
            navigate("/home")
        })
    }

    return (        
        <div className="LogInPage"> 
            <Transition direction="left">        
                <h2>{t("log in")}</h2>
                <Form 
                    title="log in"
                    handleClick={handleLogin}
                />
                <div className="Footer">
                    <p>{t("first time")}? <Link to="/signup">{t("create an account")}</Link>.</p>
                    <p><Link to="/landing">{t("back to landing page")}</Link>.</p>
                    <p><Link to="/store">{t("go to store without auth")}</Link>.</p>
                </div>
            
            </Transition> 
        </div>
    );
}

export default LogIn;