import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PutCar = () => {
    const { id } = useParams();
    const [ , setCar] = useState({});

    useEffect(() => {
        axios.put(`https://formation.inow.fr/demo/api/v1/cars/${id}`).then(resp => {
            setCar(resp.data[0]);
        }).catch(er => {
            alert(er.message);
        });

    }, [])
    return (
        <p>Modifier Voiture {id}</p>
    );
}

export default PutCar;