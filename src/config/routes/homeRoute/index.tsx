import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateProduct from '../../../pages/createProduct';
import DetailProduct from '../../../pages/detailProduct';
import Home from '../../../pages/home';

interface Props{

}

export const HomeRoute: React.FC<Props> = () => {
    return (
        <Switch>
            <Route path="/create_product">
                <CreateProduct/>
            </Route>
            <Route path="/detail_product">
                <DetailProduct/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    );
}