import React from 'react'
import { bell, hum, messege, toko, trolly } from '../../../assets';
// import Input from '../../atoms/input';

interface Props{

}

export const Header: React.FC<Props> = () => {
    return (
        <nav className="absolute shadow bg-white w-full bg-white flex p-4 px-2 items-center">
            <div className="w-1/2 md:w-2/12">
                <div className=" inline-flex justify-start items-start md:flex">
                    <button className="w-8 h-5 md:hidden">
                        <img src={hum} alt="humberger menu"/>
                    </button>
                    <button className="hidden md:block">
                        <img src={toko} alt="gambar toko" className="w-15 h-12 ml-4 "/>
                    </button>
                    <div className="w-15 h-7 px-2 border border-black rounded ml-2 md:hidden">
                        <input type="text" name="search" placeholder="pencarian di sini..." />
                    </div>
                </div>
            </div>
            <div className="hidden md:block md w-9/12 -ml-5">
                <div className="flex justify-around items-center">
                    <button className="from-green-400 bg-mid-gray">
                        kategori
                    </button>
                    <input type="text" name="search" id="search" placeholder="pencarian di sini..." className="w-full h-10  border-2 rounded p-2 px-2 ml-5"/>
                    <button className="ml-5">
                        <img src={bell} alt="bell" className="w-8 h-5"/>
                    </button>
                    <button className="ml-5">
                        <img src={messege} alt="messege" className="w-8 h-5"/>
                    </button>
                    <button className="ml-5">
                        <img src={trolly} alt="trolly" className="w-8 h-5"/>
                    </button>
                    <p className="mx-5 text-2xl">|</p>
                </div>
            </div>
            <div className="w-1/2 md:w-1/12 mx-5">
                <div className="flex justify-end md:felx">
                    <button className="hidden md:block">my</button>
                    <button className="ml-5 mb-3 md:mb-0">profil</button>
                </div>
            </div>
        </nav>
    );
}