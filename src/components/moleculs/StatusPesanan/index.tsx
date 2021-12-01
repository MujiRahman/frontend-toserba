import React, { useEffect } from 'react'
import { RootStore } from '../../../config/redux';
import { Redirect, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPesenan, upDatePesenan } from '../../../config/action/orderApi';

const StatusPesananMolekul = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    const { pesenan } = useSelector((state: RootStore) => state.orderReduser);
    const dispatch = useDispatch()
    const Prop ={
        history : useHistory()
    }
    
    useEffect(() => {
        dispatch(getAllPesenan())
        return () => {
            
        }
    }, [dispatch])

    if(!isAuthenticated) {
        return <Redirect to="/" />
    }

    const sampai = (_id: string) => {
        dispatch(upDatePesenan(_id, Prop))
        console.log('isi pesenan', _id)
    }

    pesenan.sort(function (a: any, b: any) {
        return a.sampai - b.sampai;
    });
    console.log('isi pesenan', pesenan)

    return (
        <div>
        {
            pesenan.map((hasil: any)=>{
                return(<>
                    {
                        hasil.sampai ?
                        <div className="my-auto w-1/2 mb-2 bg-gray-200 p-4 rounded-lg">
                            <p className='text-xl mb-2'>Status pemesanan anda sudah sampai</p>
                            <div className="flex">
                                <img src={`http://localhost:4000/imagesById/${hasil.imageProduct}`} alt="gambar product" className='w-20 h-20 rounded-lg mr-4 mb-2' />
                                <div>
                                    <p>{hasil.namaBarang}</p>
                                    <div className="flex gap-2">
                                        <p>jumlah barang:</p>
                                        <p> {hasil.jumlahBarang}x</p>
                                    </div>
                                    <p>total harga: {hasil.totalHarga}</p>
                                </div>
                            </div>
                            {
                                hasil.note && <p className='overflow-ellipsis overflow-hidden break-words'>note: {hasil.note}</p>
                            }
                        </div>
                        :
                        <div className="my-auto w-1/2 mb-2 p-4 rounded-lg">
                            <p className='text-xl mb-2'>Status pemesanan anda sedang {hasil.dikirim ? "dikirim" : "diproses"}</p>
                            <div className="flex">
                                <img src={`http://localhost:4000/imagesById/${hasil.imageProduct}`} alt="gambar product" className='w-20 h-20 rounded-lg mr-4 mb-2' />
                                <div>
                                    <p>{hasil.namaBarang}</p>
                                    <div className="flex gap-2">
                                        <p>jumlah barang: </p>
                                        <p>{hasil.jumlahBarang}x</p>
                                    </div>
                                    <p>total harga: {hasil.totalHarga}</p>
                                </div>
                                {hasil.dikirim && <button className="bg-red-400 w-20 h-10 rounded-lg p-2 mt-8 ml-36" onClick={()=>sampai(hasil._id)} >Sampai?</button> }
                            </div>
                            {
                                hasil.note && <p className='overflow-ellipsis overflow-hidden break-words'>note: {hasil.note}</p>
                            }
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
