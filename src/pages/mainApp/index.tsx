import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from '../../components/moleculs/footer'
import { Header } from '../../components/moleculs/header'
import CreateProduct from '../createProduct';
import DetailProduct from '../detailProduct';
import Home from '../home';

interface Props{

}

export const MainApp: React.FC<Props> = () => {
    return (
        <div className="flex flex-row w-full h-screen">
            <div className="fixed w-full">
                <Header />
            </div>
            <div className="">
                <Router>
                    <Switch>
                        <Route path="/detail_product">
                            <DetailProduct />
                        </Route>
                        <Route path="/create_product">
                            <CreateProduct />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <div className="w-full absolute inset-x-0 bottom-0">
                <Footer />
            </div>
        </div>
    );
}