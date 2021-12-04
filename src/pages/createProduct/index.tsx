/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { withRouter, RouteComponentProps, useParams, useHistory } from 'react-router-dom';
import { createDataProduct, setCreateProduct, updateDataProduct } from '../../config/action/productApi';
import { RootStore } from '../../config/redux';

type idParam = {
    _id: string;
};

const CreateProduct: React.FunctionComponent<RouteComponentProps> = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    const { createProduct } = useSelector((state: RootStore) => state.productReducer);
    const { nama, harga, jumlahBarang, deskripsi } = createProduct;
    const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
    const [update, setUpdate] = useState<boolean>(false)
    const {_id} = useParams<idParam>()
    const dispatch = useDispatch();
    const props={
        history : useHistory()
    }

    useEffect(() => {
        if (_id) {
            setUpdate(true)
            axios.get(`${process.env.REACT_APP_URL}/api/product/post/${_id}`)
                .then(result => {
                    const hasil = result.data.data;
                    dispatch(setCreateProduct('nama', hasil.nama))
                    dispatch(setCreateProduct('harga', hasil.harga))
                    dispatch(setCreateProduct('deskripsi', hasil.deskripsi))
                    dispatch(setCreateProduct('jumlahBarang', hasil.jumlahBarang))
                    dispatch(setCreateProduct('image', [...hasil.imageId] ))
                    let gbar = []
                    for(let i = 0; i < hasil.imageId.length; i++){
                        const gmbar = `${process.env.REACT_APP_URL}/${hasil.imageId[i].imageUrl}`;
                        gbar.push(gmbar)
                    }
                    setSelectedFiles(gbar)
                })
                .catch(err => {
                    console.log('isi err', err)
                })
            }
        }, [dispatch, _id, setSelectedFiles])
        
    if(!isAuthenticated) {
        return <Redirect to="/" />
    }

    const handleImageChange = (e:any) => {
        setSelectedFiles([])
    if (e.target.files) {
        const filesArray =Array.from(e.target.files).map((file:any) =>
        URL.createObjectURL(file)
        );
        // console.log("filesArray: ", filesArray);

        setSelectedFiles((prevImages) => prevImages.concat(filesArray));
        Array.from(e.target.files).map(
            (file: any) => URL.revokeObjectURL(file) // avoid memory leak
        );
        dispatch(setCreateProduct('image', [...e.target.files] ))
    }
    };
    const renderPhotos = (source: any) => {
    return source.map((photo: any) => {
        return <img src={photo} alt="gambar-product" key={photo}/>;
    });
    };

    const handleSimpan =async()=>{
        if(update){
            dispatch(setCreateProduct('nama', ''))
            dispatch(setCreateProduct('jumlahBarang', ''))
            dispatch(setCreateProduct('harga', ''))
            dispatch(setCreateProduct('deskripsi', ''))
            dispatch(setCreateProduct('image', []))
            setSelectedFiles([])
            await updateDataProduct(createProduct, _id, props)
            
        } else{
            dispatch(setCreateProduct('nama', ''))
            dispatch(setCreateProduct('jumlahBarang', ''))
            dispatch(setCreateProduct('harga', ''))
            dispatch(setCreateProduct('deskripsi', ''))
            dispatch(setCreateProduct('image', []))
            setSelectedFiles([])
            await createDataProduct(createProduct, props)
        }
    }

    const handleBatal =()=>{
        dispatch(setCreateProduct('nama', ''))
        dispatch(setCreateProduct('jumlahBarang', ''))
        dispatch(setCreateProduct('harga', ''))
        dispatch(setCreateProduct('deskripsi', ''))
        dispatch(setCreateProduct('image', []))
        setSelectedFiles([])
    }

    return (
            <div className="flex flex-col p-6 mb-8 ml-10 -mt-6">
                <p className="text-center font-sans font-semibold text-2xl text-green-500">{update ? 'UpDate' : 'Jual'} Barang {update ? 'Lama' : 'Baru'}</p>
                <form className="mb-32">
                    <label className="flex flex-row mb-2">Nama Barang</label>
                    <input type="text" value={nama} onChange={(e)=>dispatch(setCreateProduct('nama', e.target.value))} placeholder="nama barang..." className="rounded p-2 border border-black mb-4 w-full"/>
                    <label className="flex flex-row mb-2">Jumlah Barang</label>
                    <input type="text" value={jumlahBarang} onChange={(e)=>dispatch(setCreateProduct('jumlahBarang', e.target.value))} placeholder="jumlah barang" className="rounded p-2 border border-black mb-4"/>
                    <label className="flex flex-row mb-2">Harga</label>
                    <input type="text" value={harga} onChange={(e)=>dispatch(setCreateProduct('harga', e.target.value))} placeholder="harga barang nominal aja yang di masukin" className="rounded p-2 border border-black mb-4"/>
                    <label className="flex flex-row mb-2">Deskripsi</label>
                    <textarea name="deskripsi" value={deskripsi} onChange={(e)=>dispatch(setCreateProduct('deskripsi', e.target.value))} placeholder="deskripsi" className="rounded p-4 border border-black mb-4 w-full h-52 box-border"></textarea>
                    <p className="mb-2">Upload 3 Gambar</p>
                    <div className="flex justify-center gap-4">
                        <div className="w-36 h-36 flex gap-4 mt-12 ">{renderPhotos(selectedFiles)}</div>
                        <input type="file" multiple 
                            onChange={handleImageChange}
                            accept="images/*"
                        />
                    </div>
                </form>
                <div className="flex justify-end gap-8">
                    <button className="bg-gray-600 h-10 p-2 w-20 rounded-lg" onClick={handleBatal}>Batal</button>
                    <button className="bg-green-600 h-10 p-2 w-20 rounded-lg" onClick={handleSimpan} >{update ? 'update' : 'simpan'}</button>
                </div>
            </div>
    );
}

export default withRouter(CreateProduct);