import React, { useEffect, useMemo } from 'react'
import { RootStore } from '../../../config/redux';
import { Redirect } from 'react-router';
import {  useSelector, useDispatch } from 'react-redux';
import { getAllOrderan, upDateOrderan } from '../../../config/action/orderApi';
import { memo } from 'react';
 
const Pesenan = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    const { orderan } = useSelector((state: RootStore) => state.orderReduser);
    const dispatch = useDispatch()
    useMemo(() => orderan,[orderan] )
    useEffect(() => {
        dispatch(getAllOrderan())
    },[dispatch])

    const kirimProduct = (id: string) => {
        dispatch(upDateOrderan(id))
    }
    if(!isAuthenticated) {
        return <Redirect to="/" />
    }

    orderan.sort(function (a: any, b: any) {
        return a.sampai - b.sampai;
    });
    return (
        <React.Fragment>{
            orderan.map((hasil:any) => {
                return(
                    <div className="flex w-2/3 mb-2 items-center gap-6 border-2 border-black p-4 rounded-lg">
                        <img src={`${process.env.REACT_APP_URL}/imagesById/${hasil.imageProduct}`} alt="g.pesanan" className="w-20 h-20 rounded-lg" />
                        <div  className='overflow-hidden'>
                            <div className="flex">
                                <p>{hasil.namaBarang}</p>
                                <p>{hasil.jumlahBarang}</p>
                            </div>
                            <p>{hasil.nama}</p>
                            {
                                hasil.note && <div className='flex gap-2 '> 
                                <p> note: </p>
                                <p className='overflow-ellipsis overflow-hidden break-words'>{hasil.note} </p>
                            </div>
                            }
                            <p>Alamat {hasil.alamat}</p>
                            <p>Total harga {hasil.totalHarga}</p>
                        </div>
                        {
                            hasil.sampai ? <>Telah selesai</> : 
                            <>
                                {
                                hasil.dikirim ? <>sedang dikirim</> :
                                <button className="bg-green-600 h-10 p-2 rounded-lg " onClick={()=>kirimProduct(hasil._id)}>kirim</button>
                                }
                            </>
                        }
                    </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default memo(Pesenan)
