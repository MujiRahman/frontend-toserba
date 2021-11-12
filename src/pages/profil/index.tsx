import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import EditProfil from '../../components/atoms/editProfil';
import ProfilMolekul from '../../components/moleculs/profilMolekul';
import StatusPesananMolekul from '../../components/moleculs/StatusPesanan'
import { RootStore } from '../../config/redux';
import { Redirect } from 'react-router';

interface Props{

}

const ProfilUser: FC<Props> = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    
    if(!isAuthenticated) {
        return <Redirect to="/" />
    }
    return (
        <Router>
            <div  className="flex gap-10 p-2 max-w-7xl mx-auto bg-green-200">
                <ul className="block text-center h-1/2 w-40 border-2 border-black">
                    <Link to="/profil"><li className="p-6 border-black bg-red-100 cursor-pointer" >Profil</li></Link> 
                    <Link to="/profil/pesenan"><li className="p-6 border-t-2 border-black bg-red-100 cursor-pointer ">Status Pemesanan</li></Link>
                </ul>
                <Switch>
                    <Route exact path="/profil">
                        <ProfilMolekul />
                    </Route>
                    <Route path="/profil/pesenan">
                        <StatusPesananMolekul/>
                    </Route> 
                    <Route exact path="/profil/edit">
                        <EditProfil />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default ProfilUser
