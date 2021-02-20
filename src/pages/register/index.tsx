import React from 'react'
import { register } from '../../assets';

interface Props{

}

const Register: React.FC<Props> = () => {
    return (
        <section className="flex justify-center items-center h-screen box-border">
            <div className="hidden md:block md:w-2/3 xl:pl-24">
                <img src={register} alt="g"/>
            </div>
            <div className="w-2/3 shadow-2xl py-10 md:w-1/3">
                <h2 className="text-center text-2xl font-sans font-medium mb-2">Buat Toko Kamu Sendiri</h2>
                <form className="p-4 lg:px-14">
                    <label htmlFor="" className="flex flex-row">Nama Lengkap</label>
                    <input type="text" className="mb-4 border border-black rounded w-full" placeholder="masukan nama anda..."/>
                    <label htmlFor="" className="flex flex-row">Email</label>
                    <input type="text" className="mb-4 border border-black rounded w-full" placeholder="masukan email anda..."/>
                    <label htmlFor="" className="flex flex-row">Password</label>
                    <input type="text" className="mb-4 border border-black rounded w-full" placeholder="masukan password anda..."/>
                    <label htmlFor="" className="flex flex-row">Ulangi Password</label>
                    <input type="text" className="mb-4 border border-black rounded w-full" placeholder="masukan Password lagi..."/>
                </form>
                <div className="flex justify-evenly">
                    <button className="bg-red-500 py-2 px-4 rounded-2xl">cencel</button>
                    <button className="bg-blue-500 py-2 px-4 rounded-2xl">Submit</button>
                </div>
            </div>
        </section>
    );
}

export default Register;