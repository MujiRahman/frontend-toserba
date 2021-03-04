import React from 'react'
import { useHistory } from 'react-router-dom';
import { login } from '../../assets';

interface Props{

}

const Login: React.FC<Props> = () => {
    const history =useHistory();
    return (
        <section className="flex justify-center items-center h-screen box-border">
            <div className="hidden md:block md:w-2/3 xl:pl-24">
                <img src={login} alt="g"/>
            </div>
            <div className="w-2/3 shadow-2xl py-10 md:w-1/3">
                <h2 className="text-center text-2xl font-sans font-medium mb-2">Mau Masuk Toko?</h2>
                <form className="p-4 lg:px-14">
                    <label htmlFor="" className="flex flex-row">Email</label>
                    <input type="text" className="mb-4 border border-black rounded w-full p-2" placeholder="masukan email anda..."/>
                    <label htmlFor="" className="flex flex-row">Password</label>
                    <input type="text" className="mb-4 border border-black rounded w-full p-2" placeholder="masukan password anda..."/>
                </form>
                <div className="flex justify-evenly">
                    <button className="bg-red-500 py-2 px-4 rounded-2xl">Cencel</button>
                    <button className="bg-blue-500 py-2 px-4 rounded-2xl" onClick={()=>history.push('/')}>Login</button>
                </div>
                <div>
                    <h3 className="text-green-400 font-light font-sans mt-14 ml-14 font-medium">Belum punya toko? <button className="underline italic" onClick={()=>history.push('/register')}>Klik disini.</button></h3>
                </div>
            </div>
        </section>
    );
}

export default Login;