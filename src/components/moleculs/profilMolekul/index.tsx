import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { dumy } from '../../../assets';
import { RootStore } from '../../../config/redux';
// import EditProfil from '../../atoms/editProfil';
// import EditProfil from '../../atoms/editProfil'

interface Props{
    // to:string
}

const ProfilMolekul: FC<Props> = () => {
    const { auth, imagePrev } = useSelector((state: RootStore)=> state.userReducer)
    const {user, email, noHp, alamat, image, id } = auth
    const history = useHistory()
    console.log('isi auth detail user', auth, imagePrev )
    return (
        <div className="flex gap-8"  key={id}>
            <div>
                <img src={image? `http://localhost:4000/${image}` : dumy} alt="gmbar" className="w-40 h-40 rounded-lg shadow-2" />
                <button className="bg-red-600 p-2 rounded-lg w-24 mt-4 ml-8" onClick={()=>history.push("/profil/edit")}>edit</button>
            </div>
            <div className="p-2 ">
                <h1 className="text-lg font-medium">{user}</h1>
                <p>{noHp ? noHp : "nomer hape anda belum di isi"}</p>
                <p>{email}</p>
                <p>{alamat ? alamat : "alamat rumah anda belum di isi"}</p>
            </div>
        </div>
    )
}

export default ProfilMolekul
