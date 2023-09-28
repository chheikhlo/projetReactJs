import { Navigate, Route, Routes } from "react-router";
import BrandList from "../../pages/home/BrandsList";
import BrandDetails from "../../pages/home/BrandDetails";
import CarsList from "../../pages/cars/CarsList";
import PutCar from "../../pages/cars/PutCar";
import DeleteCar from "../../pages/cars/DeleteCar";
import AddCar from "../../pages/cars/AddCar";
import Login from "../../pages/authentication/Login";


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index caseSensitive element={<BrandList />} />
                <Route path="brand/details/:id" element={<BrandDetails />} />
            </Route>
            <Route path="car/">
                <Route index caseSensitive element={<CarsList />} />
                <Route path="add" element={<AddCar />} />
                <Route path="put/:id" element={<PutCar />} />
                <Route path="delete/:id" element={<DeleteCar />} />
            </Route>
            <Route path="/auth/login" caseSensitive element={<Login />} />


            {/* <Route path="404" element={<NotFound />} /> */}
            <Route path="*" element={<Navigate to="404" replace />} />
        </Routes>
    );
}

export default MainRoutes;