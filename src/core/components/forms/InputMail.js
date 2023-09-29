import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { UserContext } from "../../contexts/AuthContext";

export const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const InputMail = ({ label, onChange, ...other }) => {

    const [isValid, setIsValid] = useState(false);
    const { t } = useTranslation();

    const handleInputChange = (ev) => {
        if (regEx.test(ev.target.value)) {
            setIsValid(true);
            if (onChange)
                onChange(ev);
        } else {
            setIsValid(false);
        }
    }

    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="email" {...other} className={!isValid && "input-error"}
                onChange={handleInputChange} />

            {isValid === false && (<p style={{ color: 'red' }}>{t('invMailForm')}.</p>)}
        </Form.Group>
    );
}

export default InputMail;
