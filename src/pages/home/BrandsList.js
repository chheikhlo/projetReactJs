import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";

const BrandList = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get('https://formation.inow.fr/demo/api/v1/brands').then(resp => {
            setBrands(resp.data);
        }).catch(er => {
            alert(er.message);
        });
    }, []);

    return (
        <div>
            <h1>Liste des marques</h1>
            <Table>
                <thead>
                    <tr><th>Nom</th><th>Image</th><th></th></tr>
                </thead>
                <tbody>
                    {brands?.map((brand, index) =>
                        <tr key={index}>
                            <td>{brand.name}</td>
                            <td>
                                <img
                                    class="fit-picture"
                                    src={`/images/${brand.image}`} />
                            </td>
                            <td>
                                <Link to={`/brand/details/${brand.id}`} className="btn btn-primary">
                                    Détail
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default BrandList;