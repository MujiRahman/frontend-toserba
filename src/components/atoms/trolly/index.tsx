import React, { memo,  useMemo } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {  trolly } from '../../../assets';
import { RootStore } from '../../../config/redux';

const Trolly= () => {
    const {order, adaOrder} = useSelector((state: RootStore)=> state.orderReduser)
    const history = useHistory()
    useMemo(() => order, [order])
    useMemo(() => adaOrder, [adaOrder])
    return (
        <React.Fragment>
            <div className="dropdown inline-block relative">
                <button className="p-2 rounded items-center hover:bg-gray-100">
                    <img src={trolly} alt="trolly" className="w-8"/>
                    {adaOrder && <p className="absolute top-0 right-0 bg-red-100">{order.length}</p> }
                </button>
                    {
                        adaOrder ? 
                        <>
                        <div className="dropdown-menu absolute hidden w-md p-2 -left-52 shadow-2xl rounded bg-white box-border">
                            <div className="my-1 flex justify-between items-center">
                                <p className="p-2 text-sm font-semibold">Keranjang({order.length})</p>
                                <div className="p-2 whitespace-no-wrap hover:bg-gray-200 cursor-pointer text-xs text-green-500 " onClick={()=> history.push('/checkout')}>Lihat Sekarang</div>
                            </div>
                            <hr className=" border border-grey-500 mb-2"/>
                            {
                                order.map((orders: any)=>{
                                    return(
                                        <div className="p-1 whitespace-no-wrap hover:bg-gray-200 cursor-pointer w-full flex items-center space-x-2" onClick={()=> history.push('/checkout')}>
                                            <img src={`http://localhost:4000/${orders.image}`} alt="dumy" className="w-14 rounded"/>
                                            <div className="p-2 text-left truncate">
                                                <h2 className="">{orders.namaBarang}</h2>
                                                <h4 className="text-xs">{orders.jumlahBarangOrder} Barang</h4>
                                            </div>
                                            <h1 className="font-semibold text-green-500">Rp{orders.totalHargaOrder}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        </> : <p className='dropdown-menu absolute hidden -left-2 mt-2'>kosong</p>
                    }
                
            </div>
        </React.Fragment>
    );
}
export default memo(Trolly);