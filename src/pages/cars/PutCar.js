import axios from "axios";
import { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useParams } from "react-router";
import { useTranslation } from 'react-i18next';

const PutCar = () => {
    const { id } = useParams();
    const [dataCar, setdataCar] = useState({});
    const [brands, setBrands] = useState([]);
    const { t } = useTranslation();

    // Les Alerts
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        axios.get('https://formation.inow.fr/demo/api/v1/brands')
            .then(resp => {
                setBrands(resp.data);
            })
            .catch(er => {
                alert(er.message);
            });
    }, []);

    useEffect(() => {
        axios.get(`https://formation.inow.fr/demo/api/v1/cars/${id}`)
            .then(resp => {
                setdataCar(resp.data);
            })
            .catch(er => {
                alert(er.message);
            });
    }, [id]);

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

    //Conversion de Id car reçu en param avec useParams en int
    const carIdConvert = parseInt(id)
    dataCar.id = carIdConvert;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://formation.inow.fr/demo/api/v1/cars/${id}`, dataCar)
            .then(() => {
                setOpen(true);
                setAlertMessage("Voiture modifiée avec succès");
            })
            .catch(error => {
                alert(error.message);
                setOpen(true);
                setAlertMessage("Voiture non modifiée");
            });
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <br /><br />
                <Form.Group controlId="model">
                    <Form.Label>{t('nomVoit')}</Form.Label>
                    <Form.Control
                        type="text"
                        name="model"
                        value={dataCar.model || ''}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="dateOfCirculation">
                    <Form.Label>{t('dateMiseCirc')}</Form.Label>
                    <Form.Control
                        type="date"
                        name="dateOfCirculation"
                        value={dataCar.dateOfCirculation || ''}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>{t('prix')}</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={dataCar.price || ''}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="brandID">
                    <Form.Label>{t('mark')}</Form.Label>
                    <Form.Control
                        as="select"
                        name="brandID"
                        value={dataCar.brandID}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">{t('selectMark')}</option>
                        {brands.map(brand => (
                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    {t('modif')} {t('voit')}
                </Button>
            </Form>
            <div>
                {open && (
                    <Alert variant="success" onClose={() => setOpen(false)} dismissible>
                        {alertMessage}
                    </Alert>
                )}
            </div>
        </>
    );
};

export default PutCar;
