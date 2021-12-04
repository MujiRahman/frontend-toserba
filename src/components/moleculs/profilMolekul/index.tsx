import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { dumy } from '../../../assets';
import { RootStore } from '../../../config/redux';

const ProfilMolekul = () => {
    const { auth } = useSelector((state: RootStore)=> state.userReducer)
    const {user, email, noHp, alamat, image, id } = auth
    const history = useHistory()
    
    return (
        <div className="flex gap-8"  key={id}>
            <div>
                <img src={image? `${process.env.REACT_APP_URL}/${image}` : dumy} alt="gmbar" className="w-40 h-40 rounded-lg shadow-2" />
                <button className="bg-red-600 p-2 rounded-lg w-24 mt-4 ml-8" onClick={()=>history.push("/profil/edit")}>edit</button>
            </div>
            <div className="p-2 space-y-2 ">
                <h1 className="font-medium">Nama:  {user}</h1>
                <p>NoHp:  {noHp ? noHp : "nomer hape anda belum di isi"}</p>
                <p>Email:  {email}</p>
                <p>alamat:  {alamat ? alamat : "alamat rumah anda belum di isi"}</p>
            </div>
        </div>
    )
}

export default ProfilMolekul
