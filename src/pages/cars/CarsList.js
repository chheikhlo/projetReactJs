import { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
import { UserContext } from "../../core/contexts/AuthContext";

const CarList = () => {
    const [user, setUser] = useContext(UserContext);
    const [cars, setCars] = useState([]);
    const [brands, setBrands] = useState([]);

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
            <h1>Liste des voitures</h1>
            <div class="d-flex justify-content-end" >
                <div class="text-right " >
                    <h4>Ajouter Voiture</h4>
                    {!user ?
                        <Link to={`/car`} className="btn btn-primary">
                            Ajouter
                        </Link> :
                        <Link to={`/car/add`} className="btn btn-primary">
                            Ajouter
                        </Link>
                    }
                </div>
            </div>
            <Table>
                <thead>
                    <tr><th>Nom</th><th>Marque</th><th></th></tr>
                </thead>
                <tbody>
                    {cars?.map((car, index) =>
                        <tr key={index}>
                            <td>{car.model}</td>
                            <td>
                                {brands.find(brand => brand.id === car.brandID ? brand.name : <></>)}
                            </td>
                            <td>
                                {user ?
                                    <Link to={`/car/put/${car.id}`} className="btn btn-primary">
                                        Modifier
                                    </Link> : <></>
                                }
                            </td>
                            <td>
                                {user ?
                                    <Link to={`/car/delete/${car.id}`} className="btn btn-primary">
                                        Supprimer
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
