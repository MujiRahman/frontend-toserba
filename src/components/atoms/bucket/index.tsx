import React, { FC } from 'react'
// import { useHistory } from 'react-router-dom'

interface Props{
    className?:string,
    onclick:()=>void,
    note: (e: any)=>void,
    tambah:()=>void,
    kurang:()=>void,
    totalHarga:number,
    jumlah: number
    stock: number | undefined
}

const Bucket: FC<Props> = ({className, onclick, tambah, kurang, note, totalHarga, jumlah, stock }) => {
    // const history = useHistory()
    return (
        <div className={className}>
            <div className="w-72 max-h-80 border-2 border-grey rounded-xl p-4 shadow-lg bg-white ">
                <p>Atur jumlah dan catatan</p>
                <div className="flex gap-4 mt-4 mb-2">
                    <button className="h-6 w-6 bg-red-400 rounded" onClick={kurang}> - </button>
                    <div>{jumlah}</div>
                    <button className="h-6 w-6 bg-green-400 rounded mr-8" onClick={tambah}> + </button>
                    <p>stock {stock}</p>
                </div>
                <textarea placeholder="tambah catatan" className="p-2 text-green-800 bg-green-200 rounded-xl my-2 " onChange={note}/>
                <div className="flex justify-between border-b-2 mt-2">
                    <p>Subtotal</p>
                    <p>Rp{totalHarga}</p>
                </div>
                <div className="flex w-full mt-2">
                    <button className="bg-green-400 p-2 w-20 rounded-xl m-2 flex-1">+ Keranjang </button>
                    <button className="bg-blue-600 p-2 w-20 rounded-xl m-2 flex-1" onClick={onclick}>Beli</button>
                </div>
            </div>
        </div>
    )
}

export default Bucket;
