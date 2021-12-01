import React from 'react'
import { hum, toko } from '../../../assets';
import { Messagge } from '../../atoms/message';
import { Notification } from '../../atoms/notification';
import { Trolly } from '../../atoms/trolly';
import { MyProfil } from '../../atoms/myProfil';
import { Seller } from '../../atoms/seller';
import { useHistory} from 'react-router-dom';

export const Header = () => {
    const history = useHistory()
    return (
        <nav className="absolute shadow bg-white w-full bg-white flex justify-evenly p-4 px-2 items-center z-20">
            <div className="w-1/2 md:w-2/12 lg:ml-4 ">
                <div className=" inline-flex justify-start items-start md:flex">
                    <button className="w-8 h-5 md:hidden">
                        <img src={hum} alt="humberger menu"/>
                    </button>
                    <div className="hidden md:block">
                        <img src={toko} alt="gambar toko" onClick={()=> history.push('/')} className="w-15 h-12 ml-4 "/>
                    </div>
                    <div className="w-15 h-7 px-2 border border-black rounded ml-2 md:hidden">
                        <input type="text" name="search" placeholder="pencarian di sini..." />
                    </div>
                </div>
            </div>
            <div className="hidden md:block md w-9/12 lg:-ml-28">
                <div className="flex justify-evenly items-center space-x-2">
                    <button className="from-green-400 bg-mid-gray mr-2">
                        kategori
                    </button>
                    <input type="text" name="search" id="search" placeholder="pencarian di sini..." className="w-full h-10  border-2 rounded p-2 px-2 ml-5"/>
                    <Trolly/>
                    <Notification/>
                    <Messagge />
                    <p className="mx-5 text-2xl">|</p>
                </div>
            </div>
            <div className="w-1/2 md:w-1/12">
                <div className="flex justify-evenly">
                        <MyProfil className="hidden md:block"/>
                        <Seller/>
                    </div>
            </div>
        </nav>
    );
}