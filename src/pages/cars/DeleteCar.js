import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from 'react-i18next';

const DeleteCar = () => {
    const { id } = useParams();
    const [, setCar] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        axios.delete(`https://formation.inow.fr/demo/api/v1/cars/${id}`).then(resp => {
            setCar(resp.data[0]);
        }).catch(er => {
            alert(er.message);
        });

    }, [])

    return (
        <h4>{t('deleteCar')}</h4>
    );
}

export default DeleteCar;