import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateProduct from '../../../pages/createProduct';
import DetailProduct from '../../../pages/detailProduct';
import Home from '../../../pages/home';
import SellerUser from '../../../pages/sellerUser';

interface Props{

}

export const HomeRoute: React.FC<Props> = () => {
    return (
        <Switch>
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