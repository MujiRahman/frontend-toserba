// import React, { useEffect, } from 'react'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { AllProductUser } from '../../components/moleculs/allProduct';
import Dashboard from '../../components/moleculs/dasboard';
import Pesenan from '../../components/moleculs/pesanan';
import CreateProduct from '../createProduct';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { RootStore } from '../../config/redux';



const SellerUser = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    
    if(!isAuthenticated) {
        return (<Redirect to="/" />)
    }

    return (
        <Router>
            <div  className="flex gap-8 w-11/12 mx-auto">
                <ul className="block text-center h-1/2 w-40 border-2 border-black">
                    <Link to="/seller"><li className="p-6 border-black bg-red-100 cursor-pointer" >Dasboard</li></Link> 
                    <Link to="/seller/pesenan"><li className="p-6 border-t-2 border-black bg-red-100 cursor-pointer ">Pesanan</li></Link>
                    <Link to="/seller/jual"><li className="p-6 border-t-2 border-black bg-red-100 cursor-pointer " >JualBarang</li></Link>
                    <Link to="/seller/allUserProduct"><li className="p-6 border-t-2 border-black bg-red-100 cursor-pointer ">All Product</li></Link>
                </ul>
                <div >
                    <Switch>
                        <Route exact path="/seller">
                            <Dashboard />
                        </Route>
                        <Route path="/seller/pesenan">
                            <Pesenan />
                        </Route> 
                        <Route path="/seller/jual/:_id?">
                            <CreateProduct />
                        </Route>
                        <Route path="/seller/allUserProduct">
                            <AllProductUser/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default SellerUser;