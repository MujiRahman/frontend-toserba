import React, { FC, useEffect } from 'react'
import { RootStore } from '../../../config/redux';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { dumy } from '../../../assets';
import { getAllPesenan, upDatePesenan } from '../../../config/action/orderApi';

interface Props{

}

const StatusPesananMolekul: FC<Props> = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    const { pesenan } = useSelector((state: RootStore) => state.orderReduser);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllPesenan())
        return () => {
            
        }
    }, [dispatch])

    if(!isAuthenticated) {
        return <Redirect to="/" />
    }

    const sampai = (_id: string) => {
        upDatePesenan(_id)
    }
    console.log('isi pesenan', pesenan)

    return (
        <div className='flex gap-6 '>
        {
            pesenan.map((hasil: any)=>{
                return(<>
                    {
                        hasil.sampai ?
                        <div className="my-auto w-1/2 bg-gray-200">
                            <div className="flex">
                                <img src={`http://localhost:4000/${hasil.imageProduct}`} alt="gambar product" className='w-10 h-10' />
                                <div>
                                    <p>{hasil.namaBarang}</p>
                                    <div className="flex">
                                        <p>harga satuan</p>
                                        <p>{hasil.jumlahBarang}</p>
                                    </div>
                                    <p>{hasil.totalHarga}</p>
                                </div>
                            </div>
                            <p>{hasil.note}</p>
                            <p>Status pemesanan anda sedang samapi</p>
                        </div>
                        :
                        <div className="my-auto w-1/2 bg-red-200">
                            <div className="flex">
                                <img src={`http://localhost:4000/${hasil.imageProduct}`} alt="gambar product" className='w-10 h-10' />
                                <div>
                                    <p>{hasil.namaBarang}</p>
                                    <div className="flex">
                                        <p>harga satuan</p>
                                        <p>{hasil.jumlahBarang}</p>
                                    </div>
                                    <p>{hasil.totalHarga}</p>
                                </div>
                                {hasil.dikirim ? <button className="bg-red-400 rounded-lg p-2 mt-2 ml-20" onClick={()=>sampai(hasil._id)} >Sampai?</button> : ""}
                            </div>
                            <p>{hasil.note}</p>
                            <p>Status pemesanan anda sedang {hasil.dikirim ? "dikirim" : "diproses"}</p>
                        </div>
                    }
                </>
                )
            })
        }
        </div>
    )
}

export default StatusPesananMolekul
