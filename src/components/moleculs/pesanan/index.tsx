import React, { useEffect } from 'react'
// import { dumy } from '../../../assets'
import { RootStore } from '../../../config/redux';
import { Redirect } from 'react-router';
import {  useSelector, useDispatch } from 'react-redux';
import { getAllOrderan, upDateOrderan } from '../../../config/action/orderApi';

// useDispatch
// interface Props{
//     // className:string
// }
 
const Pesenan = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    const { orderan } = useSelector((state: RootStore) => state.orderReduser);
    const dispatch = useDispatch()
    // const [data, setData] = useState<string[]>([])
    useEffect(() => {
        dispatch(getAllOrderan())
    },[dispatch])

    const kirimProduct = (id: string) => {
        upDateOrderan(id)
    }
    console.log('isi orderan', orderan.imageProduct)
    if(!isAuthenticated) {
        return <Redirect to="/" />
    }
    
    return (
        <div>{
            orderan.map((hasil:any) => {
                return(
                    <div className="flex items-center gap-6 ml-6 border-2 border-black p-4 rounded-lg">
                        <img src={`http://localhost:4000/${hasil.imageProduct}`} alt="g.pesanan" className="w-20 h-20 rounded-lg" />
                        <div>
                            <div className="flex">
                                <p>{hasil.namaBarang}</p>
                                <p>{hasil.jumlahBarang}</p>
                            </div>
                            <p>{hasil.nama}</p>
                            <p>{hasil.note}</p>
                            <p>{hasil.alamat}</p>
                            <p>{hasil.totalHarga}</p>
                        </div>
                        <button className="bg-green-600 h-10 p-2 rounded-lg " onClick={()=>kirimProduct(hasil._id)}>{hasil.dikirim ? "sedang dikirim" : "kirim"}</button>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Pesenan
