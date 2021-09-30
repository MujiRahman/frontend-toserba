import React from 'react'
import { bell, dumy } from '../../../assets';

interface Props{
 className?:string|undefined
}

export const Notification: React.FC<Props> = ({className}) => {
    return (
    <div className={className}>
        <div className="dropdown inline-block relative">
            <button className="p-2 rounded items-center hover:bg-gray-100">
                <img src={bell} alt="notification" className="w-8"/>
            </button>
            <div className="dropdown-menu absolute hidden w-96 p-2 -left-44 shadow-2xl rounded bg-white">
                <div className="flex justify-between p-2">
                    <p>Notification</p>
                    <button>
                        <img src={dumy} alt="notif setting" className="w-6"/>
                    </button>
                </div>
                <hr className="border border-gray-500 mb-2"/>
                <div className="flex justify-between mb-2">
                    <p className="font-semibold">Status Pemesanan</p>
                    <button className="text-sm text-green-500">lihat Selengkapnya</button>
                </div>
                <div className="p-1 mb-4 whitespace-no-wrap hover:bg-gray-200 cursor-pointer w-full flex items-center space-x-2">
                        <img src={dumy} alt="dumy" className="w-14 rounded"/>
                        <div className="p-2 text-left truncate">
                            <h2 className="">Nama Barang panjang banget soalnya bhinakernjaefvbhinkasfdanv</h2>
                            <h4 className="text-xs">2 Barang(300gr)</h4>
                        </div>
                        <h1 className="font-semibold text-green-500">Rp50.000.000</h1>
                    </div>
                <div className="flex justify-evenly items-center w-full mb-4">
                    <button className="w-20 hover:bg-gray-200">
                        <img src={dumy} alt="menunggu" className="w-14 m-auto"/>
                        <p className="text-sm">Menunggu Pembayaran</p>
                    </button>
                    <button className="w-20 hover:bg-gray-200">
                        <img src={dumy} alt="Diproses" className="w-14 m-auto"/>
                        <p className="text-sm">Sedang diProses</p>
                    </button>
                    <button className="w-20 hover:bg-gray-200">
                        <img src={dumy} alt="diKirim" className="w-14 m-auto"/>
                        <p className="text-sm">Sedang diKirim</p>
                    </button>
                    <button className="w-20 hover:bg-gray-200">
                        <img src={dumy} alt="Sampai" className="w-14 m-auto"/>
                        <p className="text-sm">Sudah Sampai</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}
