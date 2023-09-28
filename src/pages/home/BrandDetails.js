import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const BrandDetails = () => {
    const { id } = useParams();
    const [brand, setBrand] = useState({});

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
            <p>Name:</p>
            <ul>
                <li>{brand?.name}</li>
            </ul>
        </div>
    );
}

export default BrandDetails;