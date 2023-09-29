import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from 'react-i18next';

const BrandDetails = () => {
    const { id } = useParams();
    const [brand, setBrand] = useState({});
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`https://formation.inow.fr/demo/api/v1/brands/${id}`).then(resp => {
            setBrand(resp.data[0]);
        }).catch(er => {
            alert(er.message);
        });

    }, [])

    return (
        <div>
            <h1>{id}</h1>
            <p>{t('nom')}:</p>
            <ul>
                <li>{brand?.name}</li>
            </ul>
        </div>
    );
}

export default BrandDetails;