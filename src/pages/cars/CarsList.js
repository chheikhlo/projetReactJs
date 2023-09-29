import React, { useEffect, useState, useContext } from "react";
import { Table, Alert } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
import { UserContext } from "../../core/contexts/AuthContext";
import { useTranslation } from 'react-i18next';

const CarList = () => {
    const [user, setUser] = useContext(UserContext);
    const [cars, setCars] = useState([]);
    const [brands, setBrands] = useState([]);
    const { t } = useTranslation();

    // Les Alerts
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        axios.get('https://formation.inow.fr/demo/api/v1/cars').then(resp => {
            setCars(resp.data);
        }).catch(er => {
            alert(er.message);
        });
    }, []);

    useEffect(() => {
        axios.get('https://formation.inow.fr/demo/api/v1/brands').then(resp => {
            setBrands(resp.data);
        }).catch(er => {
            alert(er.message);
        });
    }, []);

    // Suppression d'une voiture
    const deleteCar = (carId) => {
        axios.delete(`https://formation.inow.fr/demo/api/v1/cars/${carId}`)
            .then(() => {
                setCars(prevCars => prevCars.filter(car => car.id !== carId));
                setOpen(true);
                setAlertMessage("Voiture Supprimée avec succès");
            })
            .catch(er => {
                alert(er.message);
                setOpen(true);
                setAlertMessage("Voiture non supprimée");
            });
    };

    return (
        <>
            <div>
                <h1>{t('listVoit')}</h1>
                <div class="d-flex justify-content-end">
                    <div class="text-right">
                        <h4>{t('addVoit')}</h4>
                        {!user ?
                            <Link to={`/car`} className="btn btn-primary">
                                {t('add')}
                            </Link> :
                            <Link to={`/car/add`} className="btn btn-primary">
                                {t('add')}
                            </Link>
                        }
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr><th>{t('nom')}</th><th>{t('mark')}</th><th></th></tr>
                    </thead>
                    <tbody>
                        {cars?.map((car, index) =>
                            <tr key={index}>
                                <td>{car.model}</td>
                                <td>
                                    {brands.find(brand => brand.id === car.brandID) ?
                                        brands.find(brand => brand.id === car.brandID).name
                                        :
                                        <></>
                                    }
                                </td>
                                <td>
                                    {user ?
                                        <Link to={`/car/put/${car.id}`} className="btn btn-primary">
                                            {t('modif')}
                                        </Link> : <></>
                                    }
                                </td>
                                <td>
                                    {user ?
                                        <button
                                            onClick={() => deleteCar(car.id)}
                                            className="btn btn-primary"
                                        >
                                            {t('delet')}
                                        </button>
                                        : <></>
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <div>
                {open && (
                    <Alert variant="success" onClose={() => setOpen(false)} dismissible>
                        {alertMessage}
                    </Alert>
                )}
            </div>
        </>
    );
}

export default CarList;
