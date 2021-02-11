import React from 'react'
import { bell, messege, toko, trolly } from '../../../assets';
// import Input from '../../atoms/input';

interface Props{

}

export const Header: React.FC<Props> = () => {
    return (
        <div className="flex items-center p-4 px-5 border-2">
            <img src={toko} alt="gambar toko" className="w-17 h-14 mr-5"/>
            <p className="from-green-400">kategori</p>
            <input type="text" name="search" id="search" placeholder="pencarian di sini..." className="w-full h-10  border-2 rounded p-2 px-2 ml-5"/>
            <img src={bell} alt="bell" className="w-5 h-5 ml-5"/>
            <img src={messege} alt="bell" className="w-5 h-5 ml-5"/>
            <img src={trolly} alt="bell" className="w-5 h-5 ml-5"/>
            <div className="flex ml-5">
                <button >Login</button>
                <button className="ml-5">Register</button>
            </div>
        </div>
    );
}