import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from 'react-i18next';

const BrandDetails = () => {
    const { id } = useParams();
    const [brand, setBrand] = useState({});
    const { t } = useTranslation();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get(`https://formation.inow.fr/demo/api/v1/brands/${id}`)
            .then(resp => {
                console.log('Réponse de la requête :', resp.data);
                setBrand(resp.data);
            })
            .catch(er => {
                console.error('Erreur de requête :', er);
                alert(er.message);
            });
    }, [id]);

    useEffect(() => {
        axios.get('https://formation.inow.fr/demo/api/v1/cars')
            .then(resp => {
                console.log('Réponse de la requête car :', brandCars);
                setCars(resp.data);
            })
            .catch(er => {
                alert(er.message);
            });
    }, []);

    // Filtrer les voitures par brandID
    const brandCars = cars.filter(car => car.brandID === brand.id);

    return (
        <div>
            <h2>{brand.name}</h2>
            <h3>{t("voitMark")}:</h3>
            <ul>
                {brandCars.map(car => (
                    <li key={car.id}>{car.model}</li>
                ))}
            </ul>
        </div>
    );
}

export default BrandDetails;
