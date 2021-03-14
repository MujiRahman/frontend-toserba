import React from 'react'
import { dumy } from '../../../assets';

interface Props{
    className?:string|undefined,
    onClick?:() => void|undefined,
}

export const MyProfil: React.FC<Props> = ({className, onClick}) => {
    return (
        <div className={className} onClick={onClick}>
            <div className="dropdown inline-block relative">
                <button className="p-2 rounded text-sm font-semibold hover:bg-gray-100">MyProfil</button>
                <div className="dropdown-menu absolute hidden w-96 p-2 shadow-2xl rounded bg-white -left-64">
                    <div className="flex shadow-2xl mb-4 p-2 cursor-pointer hover:bg-gray-100">
                        <img src={dumy} alt="dumyprofil" className="w-14 rounded-full"/>
                        <div className="ml-2">
                            <p className="font-semibold text-lg">Nama pengguna</p>
                            <div className="flex">
                                <img src={dumy} alt="dumystatus" className="w-6 rounded-full mr-2"/>
                                <p>status Pengguna </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex p-2 w-full space-x-6">
                        <div className="block w-1/2 flex-grow">
                            <div className="flex justify-between p-1 cursor-pointer hover:bg-gray-100">
                                <p>OVO Cash</p>
                                <p>Rp 0</p>
                            </div>
                            <div className="flex justify-between p-1 cursor-pointer hover:bg-gray-100">
                                <p>OVO Point</p>
                                <p>0</p>
                            </div>
                            <hr className="my-2"/>
                            <div className="flex justify-between p-1 cursor-pointer hover:bg-gray-100">
                                <p>Saldo</p>
                                <p>Rp 0</p>
                            </div>
                            <hr className="my-2"/>
                            <div className="flex justify-between p-1 cursor-pointer hover:bg-gray-100">
                                <p>TokoMember</p>
                                <p>0</p>
                            </div>
                            <div className="flex justify-between p-1 cursor-pointer hover:bg-gray-100">
                                <p>TopQuest</p>
                                <p>12</p>
                            </div>
                            <div className="flex justify-between p-1 cursor-pointer hover:bg-gray-100">
                                <p>KuponSaya</p>
                                <p>10</p>
                            </div>
                        </div>
                        <hr className="absolute transform rotate-90 translate-y-28 translate-x-10 flex-grow-0 border border-grey-500 w-56"/>
                        <div className="flex-grow w-1/2">
                            <div className="flex flex-col items-start">
                                <p className="p-1 w-full cursor-pointer  hover:bg-gray-100">Pembelian</p>
                                <p className="p-1 w-full cursor-pointer hover:bg-gray-100">wishlist</p>
                                <p className="p-1 w-full cursor-pointer hover:bg-gray-100">Toko Favorit</p>
                                <p className="p-1 w-full cursor-pointer hover:bg-gray-100">Pengaturan</p>
                                <p className="mt-16 p-1 w-full cursor-pointer hover:bg-gray-100">Keluar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}