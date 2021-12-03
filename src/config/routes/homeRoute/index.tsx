import { Route, Switch } from 'react-router-dom';
import CheckOut from '../../../pages/checkOut';
import DetailProduct from '../../../pages/detailProduct';
import Home from '../../../pages/home';
import ProfilUser from '../../../pages/profil';
import SellerUser from '../../../pages/sellerUser';

export const HomeRoute = () => {
    return (
        <Switch>
            <Route path="/profil">
                <ProfilUser/>
            </Route>
            <Route path="/checkout">
                <CheckOut/>
            </Route>
            <Route path="/seller">
                <SellerUser/>
            </Route>
            <Route path="/detail_product/:_id">
                <DetailProduct/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    );
}