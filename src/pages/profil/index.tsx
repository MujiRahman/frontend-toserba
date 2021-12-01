import { useSelector } from 'react-redux';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import EditProfil from '../../components/atoms/editProfil';
import ProfilMolekul from '../../components/moleculs/profilMolekul';
import StatusPesananMolekul from '../../components/moleculs/StatusPesanan'
import { RootStore } from '../../config/redux';
import { Redirect } from 'react-router';
import BuatUlasan from '../buatUlasan';

const ProfilUser = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    
    if(!isAuthenticated) {
        return <Redirect to="/" />
    }
    return (
        <Router>
            <div  className="flex gap-10 p-2 w-11/12 mx-auto">
                <ul className="block text-center h-1/2 w-40 border-2 border-black">
                    <Link to="/profil"><li className="p-6 border-black bg-red-100 cursor-pointer" >Profil</li></Link> 
                    <Link to="/profil/pesenan"><li className="p-6 border-t-2 border-black bg-red-100 cursor-pointer ">Status Pemesanan</li></Link>
                </ul>
                <div className="flex flex-wrap gap-6">
                    <Switch>
                        <Route exact path="/profil">
                            <ProfilMolekul />
                        </Route>
                        <Route path="/profil/pesenan">
                            <StatusPesananMolekul/>
                        </Route> 
                        <Route path="/profil/Ulasan/:_id">
                            <BuatUlasan/>
                        </Route> 
                        <Route exact path="/profil/edit">
                            <EditProfil />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default ProfilUser
