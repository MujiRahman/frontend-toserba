import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../assets';
import { loginUserApi, setForm } from '../../config/action/userApi';
import { RootStore } from '../../config/redux';

const Login = () => {
    const history = useHistory() 
    const {form, errorLogin} =useSelector((state: RootStore) => state.userReducer)
    const { email, password} =form;
    const { errorsEmail, errorsPassord, message} =errorLogin
    const dispatch = useDispatch()
    const props = {
        history :useHistory()
    };
    const handleLogin = () => {
        dispatch(loginUserApi(form, props ))
        console.log('isi email dan password', email, password)
        console.log('isi err login', errorLogin)
    }
    return (
        <section className="flex justify-center items-center h-screen box-border">
            <div className="hidden md:block md:w-2/3 xl:pl-24">
                <img src={login} alt="g"/>
            </div>
            <div className="w-2/3 shadow-2xl py-10 md:w-1/3">
                <h2 className="text-center text-2xl font-sans font-medium mb-2">Mau Masuk Toko?</h2>
                <form className="p-4 lg:px-14">
                    <label htmlFor="" className="flex flex-row">Email</label>
                    <input type="text" className="mb-4 border border-black rounded w-full p-2" placeholder="masukan email anda..." value={email} onChange={(e)=>dispatch(setForm('email', e.target.value))}/>
                    {errorsEmail && <p className="relative -mt-2 mb-2 text-xs text-red-400">* {message}</p>}
                    <label htmlFor="" className="flex flex-row">Password</label>
                    <input type="password" className="mb-4 border border-black rounded w-full p-2" placeholder="masukan password anda..." value={password} onChange={(e)=>dispatch(setForm('password', e.target.value))}/>
                    {errorsPassord && <p className="relative -mt-2 mb-2 text-xs text-red-400">* {message}</p>}
                </form>
                <div className="flex justify-evenly">
                    <button className="bg-red-500 py-2 px-4 rounded-2xl">Cencel</button>
                    <button className="bg-blue-500 py-2 px-4 rounded-2xl" onClick={handleLogin}>Login</button>
                </div>
                <div>
                    <h3 className="text-green-400 font-light font-sans mt-14 ml-14 font-medium">Belum punya toko? <button className="underline italic" onClick={()=>history.push('/register')}>Klik disini.</button></h3>
                </div>
            </div>
        </section>
    );
}

export default Login;