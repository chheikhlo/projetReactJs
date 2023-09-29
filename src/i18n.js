// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'fr', // pour la langue par défaut
        fallbackLng: 'fr', // met le mot en français si pas de traduction en anglais
        interpolation: {
            escapeValue: false // Pour éviter l'échappement automatique
        },
        resources: {
            en: {
                translation: {
                    invMailForm: "Invalid mail format",
                    mdp: "Password",
                    home: "Home",
                    voit: "Cars",
                    disconn: "Disconnect",
                    conn: "Login",
                    connn: "Login",
                    nomVoit: "Name (model)",
                    dateMiseCirc: "Release date",
                    prix: "Price",
                    mark: "Brand",
                    selectMark: "Select a brand",
                    createVoit: "Create Car",
                    listVoit: "List of cars",
                    addVoit: "Add car",
                    add: "Add",
                    nom: "Name",
                    modif: "Edit",
                    delet: "Delete",
                    deleteCar: "Car Deleted",
                    img: "Image",
                    detail: "Detail",
                    listMark: "List of brands"
                }
            },
            fr: {
                translation: {
                    invMailForm: "Format du mail invalide",
                    mdp: "Mot de passe",
                    home: "Accueil",
                    voit: "Voitures",
                    disconn: "Se deconnecter",
                    conn: "Connexion",
                    connn: "Se connecter",
                    nomVoit: "Nom (modèle)",
                    dateMiseCirc: "Date de mise en circulation",
                    prix: "Price",
                    mark: "Marque",
                    selectMark: "Sélectionnez une Marque",
                    createVoit: "Créer Voiture",
                    listVoit: "Liste de Voiture",
                    addVoit: "Ajouter voiture",
                    add: "Ajouter",
                    nom: "Nom",
                    modif: "Modifier",
                    delet: "Supprimé",
                    deleteCar: "Voiture Supprimé",
                    img: "Image",
                    detail: "Détail",
                    listMark: "Liste des marques"

                }
            }
        },
    });

export default i18n;
