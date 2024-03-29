import React, { FC, memo } from 'react'

interface Props{
    className?:string,
    onclick:()=>void,
    tambahKranjang:()=>void,
    note: (e: any)=>void,
    tambah:()=>void,
    kurang:()=>void,
    totalHarga:number,
    jumlah: number
    stock: number | undefined,
    valuenote: string
}

const Bucket: FC<Props> = ({className, onclick, tambah, kurang, note, totalHarga, jumlah, stock, tambahKranjang, valuenote }) => {
    console.log('bucket render')
    return (
        <div className={className}>
            <div className="w-72 h-80 border-2 border-grey rounded-xl p-4 shadow-lg bg-white ">
                <p>Atur jumlah dan catatan</p>
                <div className="flex gap-4 mt-4 mb-2">
                    <button className="h-6 w-6 bg-red-400 rounded" onClick={kurang}> - </button>
                    <div>{jumlah}</div>
                    <button className="h-6 w-6 bg-green-400 rounded mr-8" onClick={tambah}> + </button>
                    <p>stock {stock}</p>
                </div>
                <textarea placeholder="tambah catatan" className="p-2 border text-green-800 rounded-xl my-2 " value={valuenote} onChange={note}/>
                <div className="flex justify-between border-b-2">
                    <p>Subtotal</p>
                    <p>Rp{totalHarga}</p>
                </div>
                <div className="flex w-full mt-2">
                    <button className="bg-green-400 p-2 w-20 rounded-xl m-2 flex-1" onClick={tambahKranjang}>+ Keranjang </button>
                    <button className="bg-blue-600 p-2 w-20 rounded-xl m-2 flex-1" onClick={onclick}>Beli</button>
                </div>
            </div>
        </div>
    )
}

export default memo(Bucket);
