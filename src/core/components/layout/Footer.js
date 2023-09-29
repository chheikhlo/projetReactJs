import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (

        <footer className="bg-dark text-light text-center py-3" style={{ minHeight: "40vh" }}>
            {t('foot')}
        </footer>
    );
};

export default Footer;
