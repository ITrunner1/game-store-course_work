import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Form = ({ title, handleClick }) => { 
    const { t } = useTranslation();   
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (        
        <div className="Form">
                <p>
                    <label>{t("email address")}</label><br/>
                    <input
                        type="email"
                        value={email}
                        name="first_name"
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        required />
                </p>
                <p>
                    <label>{t("password")}</label>                    
                    <br/>
                    <input 
                        type="password" 
                        value={pass}
                        name="password" 
                        onChange={(e) => setPass(e.target.value)} 
                        placeholder="Password" 
                        required />
                </p>
                <p>
                <Button
                    onClick={() => handleClick(email, pass)}
                    className="LogInButton"
                    >{t(title)}
                </Button>
            </p>
        </div>
        
    )
}

export { Form };