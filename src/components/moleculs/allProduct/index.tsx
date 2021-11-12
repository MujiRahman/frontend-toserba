import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootStore } from '../../../config/redux';
import { Redirect } from 'react-router';
import { getAllDataUser } from '../../../config/action/productApi';
import { confirmAlert } from "react-confirm-alert";
import axios from 'axios';

// interface Props{
//     // imge: string,
//     // judul: string,
//     // harga: number | string,
//     // asalKota: string,
//     // rating: string |number,
//     // terjual: string | number,
//     // _id: string,
//     // onDelete: (_id: string) => void
//     // className:string
// }

export const AllProductUser = () => {
    // const {imge, judul, harga, asalKota, rating, terjual, _id, onDelete} = props
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    const { productUser } = useSelector((state: RootStore) => state.productReducer);
    const history = useHistory();
    const dispatch = useDispatch()
    
    const confirmDelete = (_id: string) => {
        console.log('tekan tombol');
        
        confirmAlert({
            title: "Konfirmasi Untuk Hapus Product",
            message: "Udah yakin mau dihapus....?",
            buttons: [
                {
                    label: 'yes',
                    onClick : () => {
                        axios.delete(`http://localhost:4000/api/product/post/${_id}` , {
                            headers:{
                                'auth-token' :  localStorage.getItem('token')
                            }
                        }).then(res => {
                            console.log('hapus success', res);
                        }).catch(err => {
                            console.log('hapus gagal total');
                        })
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        console.log('No hapus ya..')
                    }
                }
            ]
        });
    }
    
    useEffect(() => {
        if(isAuthenticated){
            dispatch(getAllDataUser())
        }
        // return(()=>{
        //     dispatch(getAllDataUser())
        // })
    }, [isAuthenticated, dispatch])
    
    
    if(!isAuthenticated) {
        return <Redirect to="/" />
    }
    
    
    return (
        <div className="flex flex-wrap gap-6 ml-6">{
            productUser.map((hasil:any) => {
            return(
                <div className="max-h-60 w-40 border-2 border-black rounded-lg shadow box-border p-1 box-border cursor-pointer">
                    <img src={`http://localhost:4000/imagesId/${hasil.imageId[0]}`} alt="img thumbnail" className="w-40 h-28 rounded"/>
                    <div className="px-1">
                        <p className="font-sans break-words leading-tight">{hasil.nama}</p>
                        <p className=" text-lg font-medium">{hasil.harga}</p>
                        <p className="text-sm">{hasil.asalKota}</p>
                        <div className="flex text-xs">
                            <p className="mr-1">{hasil.rating}</p>
                            <p>{hasil.terjual}</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-2 p-2">
                        <button className="w-20 bg-gray-400 p-2 rounded-lg" onClick={()=>confirmDelete(hasil._id)}>Hapus</button>
                        <button className="w-20 bg-red-500 p-2 rounded-lg" onClick={()=>history.push(`/seller/jual/${hasil._id}`)}>Edit</button>
                    </div>
                </div>
            )
            })
            }
        </div>
    );
}