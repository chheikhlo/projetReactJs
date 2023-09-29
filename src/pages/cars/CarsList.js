import { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
import { UserContext } from "../../core/contexts/AuthContext";
import { useTranslation } from 'react-i18next';

const CarList = () => {
    const [user, setUser] = useContext(UserContext);
    const [cars, setCars] = useState([]);
    const [brands, setBrands] = useState([]);
    const { t } = useTranslation();

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

    return (
        <div>
            <h1>{t('listVoit')}</h1>
            <div class="d-flex justify-content-end" >
                <div class="text-right " >
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
                                    <Link to={`/car/delete/${car.id}`} className="btn btn-primary">
                                        {t('delet')}
                                    </Link> : <></>
                                }
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default CarList;
