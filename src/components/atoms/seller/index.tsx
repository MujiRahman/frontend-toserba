import React from 'react'
import { dumy } from '../../../assets';

interface Props{
className?:string|undefined,
onClick?:()=> void|undefined,
}

export const Seller: React.FC<Props> = ({className, onClick}) => {
    return (
        <div className={className} onClick={onClick}>
            <div className="dropdown inline-block relative">
                <button className="p-2 rounded text-sm font-semibold hover:bg-gray-100">Seller</button>
                <div className="dropdown-menu absolute hidden max-w-sm p-2 -left-80 shadow-2xl rounded bg-white box-border">
                <div className="flex mb-2 p-2 cursor-pointer hover:bg-gray-100">
                        <img src={dumy} alt="dumyprofil" className="w-10 rounded-full"/>
                        <div className="ml-2">
                            <p className="text-base">Nama pengguna</p>
                            <div className="flex space-x-2">
                                <p className="text-xs">Reguler mercent</p>
                                <button className="text-xs text-green-500">Upgrade menjadi Power Mercent?</button>
                            </div>
                        </div>
                    </div>
                    <hr className=" border border-grey-500 mb-2"/>
                    <div className="p-1 whitespace-no-wrap hover:bg-gray-200 cursor-pointer w-full flex items-center space-x-2 hover:bg-grey-200">
                        <img src={dumy} alt="dumy" className="w-14 rounded"/>
                        <div className="p-2 text-left truncate">
                            <h2 className="">Nama Barang panjang banget soalnya bhinakernjaefvbhinkasfdanv</h2>
                            <h4 className="text-xs">2 Barang(300gr)</h4>
                        </div>
                        <h1 className="font-semibold text-green-500">Rp50.000.000</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}