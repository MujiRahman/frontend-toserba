import React from 'react'
import { dumy, trolly } from '../../../assets';

interface Props{
    className?:string|undefined,
}

export const Trolly: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <div className="dropdown inline-block relative">
                <button className="p-2 rounded items-center hover:bg-gray-100">
                    <img src={trolly} alt="trolly" className="w-8"/>
                </button>
                <div className="dropdown-menu absolute hidden max-w-md p-2 -left-52 shadow-2xl rounded bg-white box-border">
                    <div className="my-1 flex justify-between items-center">
                        <p className="p-2 text-sm font-semibold">Keranjang(1)</p>
                        <div className="p-2 whitespace-no-wrap hover:bg-gray-200 cursor-pointer text-xs text-green-500 hover:bg-grey-200">Lihat Sekarang</div>
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
