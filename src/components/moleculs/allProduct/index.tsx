import React, { useEffect, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootStore } from '../../../config/redux';
import { Redirect } from 'react-router';
import { getAllDataUser } from '../../../config/action/productApi';
// import { confirmAlert } from "react-confirm-alert";
// import axios from 'axios';
import Modal from '../modal';

export const AllProductUser = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    const { productUser } = useSelector((state: RootStore) => state.productReducer);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [id, setId] = useState<string>('');
    const history = useHistory();
    const dispatch = useDispatch()
    
    // const confirmDelete = (_id: string) => {
    //     console.log('tekan tombol');
    //     confirmAlert({
    //         customUI: ({ onClose }) => {
    //             return (
    //                 <div className='bg-red-200 fixed overflow-hidden w-32 h-32 inset-2/4'>
    //                     <h1>Are you sure?</h1>
    //                     <p>You want to delete this file?</p>
    //                     <button onClick={onClose}>No</button>
    //                     <button
    //                     onClick={() => {
    //                         axios.delete(`http://localhost:4000/api/product/post/${_id}` , {
    //                             headers:{
    //                                 'auth-token' :  localStorage.getItem('token')
    //                             }
    //                         }).then(res => {
    //                             console.log('hapus success', res);
    //                             dispatch({
    //                                 type: 'HAPUS-PRODUCT',
    //                                 payload:{_id}
    //                             })
    //                         }).catch(err => {
    //                             console.log('hapus gagal total');
    //                         })
    //                     console.log('tekan tombol12');
    //                         onClose();
    //                     }}
    //                     >
    //                     Yes, Delete it!
    //                     </button>
    //                 </div>
    //             );
    //         }
    //         });
    // }
    
    useEffect(() => {
        if(isAuthenticated){
            dispatch(getAllDataUser())
        }
    }, [isAuthenticated, dispatch])
    
    
    if(!isAuthenticated) {
        return <Redirect to="/" />
    }
    
    const hapus = (_id: string) =>{
        setModalOpen(true)
        setId(_id)
    }

    return (
        <div className="flex flex-wrap gap-6 ml-6">{
            productUser.map((hasil:any) => {
            return(
                <div className="max-h-60 w-40 border-2 border-black rounded-lg shadow box-border p-1 box-border cursor-pointer" key={hasil._id}>
                    {/* {modalOpen && <Modal setOpenModal={setModalOpen} _id={hasil._id} />} */}
                    <img src={`http://localhost:4000/imagesId/${hasil.imageId[0]}`} alt="img thumbnail" className="w-40 h-28 rounded"/>
                    <div className="px-1">
                        <p className="ont-sans truncate leading-tight">{hasil.nama}</p>
                        <p className=" text-lg font-medium">{hasil.harga}</p>
                        <p className="text-sm">{hasil.asalKota}</p>
                        <div className="flex justify-beetwen text-xs">
                            <p className="mr-10">Rating {hasil.rating}</p>
                            <p>terjual {hasil.terjual}</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-2 p-2">
                        <button className="w-20 bg-gray-400 p-2 rounded-lg" onClick={()=>hapus(hasil._id)}>Hapus</button>
                        <button className="w-20 bg-red-500 p-2 rounded-lg" onClick={()=>history.push(`/seller/jual/${hasil._id}`)}>Edit</button>
                    </div>
                    
                </div>
            )
            })
            }
            {modalOpen && <Modal setOpenModal={setModalOpen} _id={id} />}
        </div>
    );
}