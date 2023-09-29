import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputMail from "../../core/components/forms/InputMail";
import { UserContext } from "../../core/contexts/AuthContext";
import InputPassword from "../../core/components/forms/inputPassword";
import { useTranslation } from 'react-i18next';

const Login = () => {

    const [userLog, setUserLog] = useState({ email: '', password: '' });
    const [user, setUser] = useContext(UserContext);
    const { t } = useTranslation();

    const submit = (ev) => {
        ev.preventDefault();
        //appel et retour serveur auth
        let u = {  mail: userLog.email };
        setUser(u);
    }

    const changeFormField = (ev) => {
        const obj = { ...userLog };
        obj[ev.target.name] = ev.target.value;
        setUserLog(obj);
        console.log(obj);
    }

    return (
        <div>
            <h1>{t('conn')}</h1>
            <Form noValidate onSubmit={submit}>

                <InputMail label="Login" placeholder="Votre login"
                    onChange={changeFormField} name="email" />
                <InputPassword label="Mot de passe" placeholder="Votre mot de passe"
                    onChange={changeFormField} name="password" />

                <Button variant="primary" type="submit">{t('connn')}</Button>
            </Form>
        </div>
    )
}

export default Login;