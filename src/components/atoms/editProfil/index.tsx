import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../config/redux';
import ButtonInput from '../inputFile';
import { setAuth, setImagePrev, updateUserApi } from '../../../config/action/userApi';
import { useHistory } from 'react-router-dom';

const EditProfil = () => {
    const { isAuthenticated, auth, imagePrev } = useSelector((state: RootStore) => state.userReducer);
    const {user, email, noHp, alamat, asalKota } = auth
    const dispatch = useDispatch()
    const props = {
        history :useHistory()
    };

    if(!isAuthenticated) {
        return <Redirect to="/" />
    }

    const onSubmit=() => {
        console.log('isi auth', auth)
        dispatch(updateUserApi(auth, props ))
    }

    const handleBatal =()=>{
        props.history.push('/profil')
    }

    const onImageUload = (e: any) => {
        const file = e.target.files[0];
        dispatch(setAuth('image', file));
        dispatch(setImagePrev(URL.createObjectURL(file)));
    }
    console.log('isi ProfilMolekul',auth, imagePrev )
    return (
        <div className='w-96'>
            <form>
                <label className="flex flex-row mb-2">ganti nama</label>
                <input value={user} type="text" className="w-96 p-2 rounded-lg focus:border-black border-2" placeholder="masukan nama"  onChange={(e)=> dispatch(setAuth('user', e.target.value))}/>
                <label className="flex flex-row mb-2">ganti email</label>
                <input value={email} type="email" className="w-96 p-2 rounded-lg focus:border-black border-2" placeholder="masukan email" onChange={(e)=> dispatch(setAuth('email', e.target.value))}/>
                <label className="flex flex-row mb-2">gati no hape</label>
                <input value={noHp} type="text" className="w-70 p-2 rounded-lg focus:border-black border-2" placeholder="masukan no Hp" onChange={(e)=> dispatch(setAuth('noHp', e.target.value))}/><label className="flex flex-row mb-2">asalKota </label>
                <input value={asalKota} type="text" className="w-70 p-2 rounded-lg focus:border-black border-2" placeholder="buat alamat toko anda" onChange={(e)=> dispatch(setAuth('asalKota', e.target.value))}/>
                <label className="flex flex-row mb-2">ganti alamat</label>
                <textarea value={alamat} className="w-full h-40 p-2 rounded-lg box-border focus:border-black border-2" placeholder="masukan alamat rumah anda" onChange={(e)=> dispatch(setAuth('alamat', e.target.value))}/>
                <label className="flex flex-row mb-2">ganti foto profil</label>
                <ButtonInput onChange={(e)=> onImageUload(e)} img={imagePrev=== undefined ? `${process.env.REACT_APP_URL}/${auth.image}` : imagePrev} />
            </form>
            <div className="flex my-8 gap-6">
                <button className="w-20 bg-gray-400 p-2 rounded-lg" onClick={handleBatal}>Batal</button>
                <button className="w-20 bg-red-600 p-2 rounded-lg" onClick={onSubmit}>Simpan</button>
            </div>
        </div>
    )
}

export default EditProfil;
