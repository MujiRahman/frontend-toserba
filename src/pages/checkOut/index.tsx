import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import Tagihan from '../../components/atoms/tagihan';
import { orderBaru } from '../../config/action/orderApi';
import { RootStore } from '../../config/redux';

const CheckOut = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    const { order } = useSelector((state: RootStore) => state.orderReduser)
    const history = useHistory()
    const dispatch = useDispatch()

    if(!isAuthenticated) {
        return <Redirect to="/" />
    }
    if(order.length < 1){
        return <div className="w-1/2 m-auto">
            <div className="text-3xl font medium my-6 underline">Kranjang anda kosong silakan blanja kembali</div>
            <button className="w-20 ml-64 mt-20 bg-green-600 p-2 rounded-lg" onClick={()=> history.push('/')} >Home</button>
        </div>
    }
    const hargaTotal = order.map((e: any) => e.totalHargaOrder)
    const hasil = hargaTotal.reduce((acumulator: any, currentValue: any)=>{
        return acumulator + currentValue
    })
    
    const bayar = () => {
        dispatch(orderBaru(order))
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
                            _id={ orders._id}
                        />
                    )
                })
            }
            <hr className="border-2 border-black my-4"/>
            <div className="flex justify-around mr-24">
                <p>Total Tagihan</p>
                <p className="ml-8">Rp {hasil}</p>
            </div>
            <div className="flex justify-end gap-20 mt-16 mb-10 mr-40">
                <button className="bg-gray-600 w-20 p-2 rounded-lg" onClick={()=> history.push('/')} >Batal</button>
                <button className="bg-red-600 w-20 p-2 rounded-lg" onClick={bayar} >Bayar</button>
            </div>
        </div>
    )
}

export default CheckOut;


