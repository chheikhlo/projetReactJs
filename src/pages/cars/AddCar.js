import axios from "axios";
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddCar = () => {
    const [dataCar, setdataCar] = useState({});
    //pour faire un map sur lui
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get('https://formation.inow.fr/demo/api/v1/brands')
            .then(resp => {
                setBrands(resp.data);
            })
            .catch(er => {
                alert(er.message);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setdataCar({ ...dataCar, [name]: value });
    };

    //Conversion de prix en float 
    const priceConvert = parseFloat(dataCar.price)
    dataCar.price = priceConvert;

    //Conversion de Id marque en int
    const brandIdConvert = parseInt(dataCar.brandID)
    dataCar.brandID = brandIdConvert;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://formation.inow.fr/demo/api/v1/cars', dataCar);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <br /><br />
            <Form.Group controlId="model">
                <Form.Label>Nom (model)</Form.Label>
                <Form.Control
                    type="text"
                    name="model"
                    value={dataCar.model}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="dateOfCirculation">
                <Form.Label>Date de mise en circulation</Form.Label>
                <Form.Control
                    type="date"
                    name="dateOfCirculation"
                    value={dataCar.dateOfCirculation}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="price">
                <Form.Label>Prix</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    value={dataCar.price}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="brandID">
                <Form.Label>Marque</Form.Label>
                <Form.Control
                    as="select"
                    name="brandID"
                    value={dataCar.brandID}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Sélectionnez une marque</option>
                    {brands.map(brand => (
                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
                Créer Voiture
            </Button>
        </Form>
    );
};

export default AddCar;
