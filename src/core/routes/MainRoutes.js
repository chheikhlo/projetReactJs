import { Navigate, Route, Routes } from "react-router";
import BrandList from "../../pages/home/BrandsList";
import BrandDetails from "../../pages/home/BrandDetails";
import CarsList from "../../pages/cars/CarsList";
import AddCar from "../../pages/cars/AddCar";
import Login from "../../pages/authentication/Login";
import PutCar from "../../pages/cars/PutCar";
import { UserContext } from "../../core/contexts/AuthContext";
import { useContext } from 'react';
import NotFound from "../../pages/home/NotFound";

const MainRoutes = () => {

    const [user, setUser] = useContext(UserContext);

    return (
        <Routes>
            <Route path="/">
                <Route index caseSensitive element={<BrandList />} />
                <Route path="brand/details/:id" element={<BrandDetails />} />
            </Route>
            <Route path="car/">
                <Route index caseSensitive element={<CarsList />} />
                <Route
                    path="add"
                    element={user ? <AddCar /> : <Navigate to="/auth/login" replace />}
                />
                <Route
                    path="put/:id"
                    element={user ? <PutCar /> : <Navigate to="/auth/login" replace />}
                />  
            </Route>            
            <Route path="/auth/login" caseSensitive element={<Login />} />

            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="404" replace />} />
        </Routes>
    );
}

export default MainRoutes;