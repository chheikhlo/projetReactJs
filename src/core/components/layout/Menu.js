import { useContext } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n'; // Importez le fichier de configuration i18n

const Menu = () => {
    const [user, setUser] = useContext(UserContext);
    const { t } = useTranslation();

    const logout = () => {
        setUser(undefined);
        sessionStorage.removeItem('USER');
    }

    // Choix de langage
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link">{t('home')}</Link>
                        <Link to={'/car'} className="nav-link">{t('voit')}</Link>
                        {user ?
                            <span style={{ color: 'white' }}> <Button className="btn btn-secondary" onClick={logout}>{t('disconn')}</Button></span> :
                            <Link to={'/auth/login'} className="nav-link">{t('connn')}</Link>
                        }
                    </Nav>
                    <div>
                        <button onClick={() => changeLanguage('en')}>English</button>
                        <button onClick={() => changeLanguage('fr')}>Français</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
