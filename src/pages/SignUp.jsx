import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from 'react-i18next';

import { setUser } from "../redux/userSlice";
import { Form } from '../components/Account/Form';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  { t } = useTranslation();

    const handleSingin = (email, password) => { 
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
            <h2>{t("sign up")}</h2>
            <h4>{t("create your personal account")}</h4>
            <Form 
                title={t("sign up")}
                handleClick={handleSingin}
            />            
            <div className="Footer"> 
                <p><Link to="/store">{t("go to store without auth")}</Link>.</p>
            </div>
        </div>
    );
}

export default SignUp;