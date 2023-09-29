import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>
                {t("notFound")}
            </h2>
            <Link to={'/auth/login'} className="btn btn-secondry">page de connexion</Link>
        </div>
    );
}

export default NotFound;
