import { useState } from "react";
import { Form } from "react-bootstrap";

const regEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const InputPassword = ({ label, onChange, ...other }) => {

    const [isValid, setIsValid] = useState(false);

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
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" {...other} className={!isValid && "input-error"} 
                onChange={handleInputChange} />
        </Form.Group>
    );
}

export default InputPassword;