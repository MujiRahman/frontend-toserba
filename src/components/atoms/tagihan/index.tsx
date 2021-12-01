import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../config/redux'

interface Props{
    nama: string,
    image: string,
    harga: number,
    jumlah: number,
    total: number,
    note: string,
    _id: string
}

const Tagihan: FC<Props> = ({nama, image, harga, jumlah, total, note, _id}) => {
    const {order} =useSelector((state: RootStore)=> state.orderReduser)
    const dispatch= useDispatch()
    const hapus =() =>{
        dispatch({type:'DELETE-ORDERS', payload:{_id}})
        console.log('isi hapus order', order)
    }
    return (
        <div className="flex gap-6 my-6">
            <img src={image} alt="g.product" className="w-20 h-20 rounded-lg " />
            <div className=" w-1/2" >
                <p className="text-lg truncate">{nama}</p>
                <div className="flex gap-10 text-sm">
                    <p>Rp {harga}</p>
                    <p>x{jumlah} buah</p>
                </div>
                <p className='text-sm text-red-500'>catatan:</p>
                <p className='truncate ml-4'>{note} </p>
            </div>
            <p className='mt-4'>Rp {total}</p>
            <button onClick={hapus} className='w-6 h-6'>X</button>
        </div>
    )
}

export default Tagihan;