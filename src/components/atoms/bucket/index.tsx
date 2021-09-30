import React, { FC } from 'react'

interface Props{
    className?:string
}

const Bucket: FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <div className="w-56 max-h-80 border-2 border-grey rounded-xl p-4 shadow-lg bg-white ">
                <p>Atur jumlah dan catatan</p>
                <div className="flex gap-4 my-2">
                    <button className="h-6 w-6 bg-red-400 rounded"> - </button>
                    <div> 2 </div>
                    <button className="h-6 w-6 bg-green-400 rounded"> + </button>
                    <p>stock 12</p>
                </div>
                <button className="p-2 text-green-800 bg-green-200 rounded-xl my-2 ">Tambah Catatan</button>
                <div className="flex justify-between border-b-2 mt-2">
                    <p>Subtotal</p>
                    <p>Rp160.000</p>
                </div>
                <div className="inline-block mt-2">
                    <button className="bg-green-400 p-2 w-full rounded-xl m-2">+ Keranjang </button>
                    <button className="bg-blue-600 p-2 w-full rounded-xl m-2">Beli</button>
                </div>
            </div>
        </div>
    )
}

export default Bucket
