import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import Tagihan from '../../components/atoms/tagihan';
import { orderBaru } from '../../config/action/orderApi';
import { RootStore } from '../../config/redux';

interface Props{

}

const CheckOut: FC<Props> = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    const { order } = useSelector((state: RootStore) => state.orderReduser)
    const history = useHistory()

    if(!isAuthenticated) {
        return <Redirect to="/" />
    }

    const hargaTotal = order.map((e: any) => e.totalHargaOrder)
    const hasil = hargaTotal.reduce((acumulator: any, currentValue: any)=>{
        return acumulator + currentValue
    })
    console.log('isi order', order, hargaTotal, hasil)
    
    const bayar = () => {
        orderBaru(order)
    }

    return (
        <div className=" w-2/3 m-auto ">
            <h1 className="text-3xl font medium my-6 underline">Total Blanjaan</h1>
            {
                order.map((orders: any) =>{
                    return(
                        <Tagihan 
                            key = {orders._id}
                            nama = {orders.namaBarang}
                            image = {`http://localhost:4000/${orders.image}`}
                            harga = {orders.harga}
                            jumlah = {orders.jumlahBarangOrder}
                            total = {orders.totalHargaOrder}
                            note = {orders.note}
                        />
                    )
                })
            }
            <hr className="border-2 border-black my-4"/>
            <div className="flex justify-around">
                <p>Total Tagihan</p>
                <p className="ml-8">Rp {hasil}</p>
            </div>
            <div className="flex justify-end gap-12 my-10 mr-16">
                <button className="bg-gray-600 w-20 p-2 rounded-lg" onClick={()=> history.push('/')} >Batal</button>
                <button className="bg-red-600 w-20 p-2 rounded-lg" onClick={bayar} >Bayar</button>
            </div>
        </div>
    )
}

export default CheckOut;


