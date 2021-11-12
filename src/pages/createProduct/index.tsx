/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { withRouter, RouteComponentProps, useParams, BrowserRouter as Router, useHistory } from 'react-router-dom';
// import { dumy } from '../../assets';
// import ButtonInput from '../../components/atoms/inputFile';
import { createDataProduct, setCreateProduct, updateDataProduct } from '../../config/action/productApi';
import { RootStore } from '../../config/redux';

// interface Props{
//     // className:string
// }
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
    const history = useHistory();

    useEffect(() => {
        if (_id) {
            setUpdate(true)
            axios.get(`http://localhost:4000/api/product/post/${_id}`)
                .then(result => {
                    const hasil = result.data.data;
                    console.log('isi api update', result.data.data.imageId)
                    dispatch(setCreateProduct('nama', hasil.nama))
                    dispatch(setCreateProduct('harga', hasil.harga))
                    dispatch(setCreateProduct('deskripsi', hasil.deskripsi))
                    dispatch(setCreateProduct('jumlahBarang', hasil.jumlahBarang))
                    dispatch(setCreateProduct('image', [...hasil.imageId] ))
                    for(let i = 0; i < hasil.imageId.length; i++){
                        let gbar = []
                        const gmbar = `http://localhost:4000/${hasil.imageId[i].imageUrl}`;
                        gbar.push(gmbar)
                        setSelectedFiles(gbar)
                    }
                })
                .catch(err => {
                    console.log('isi err', err)
                })
        }
    }, [dispatch, _id, setSelectedFiles])
    // console.log('isi selectfile', selectedFiles)

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
        // return (<>
        //         <img src={source[0]} alt="" key={source} />
        //         <img src={source[1]} alt="" key={source} />
        //         <img src={source[2]} alt="" key={source} />
        //     </>)
    // for(let i = 0; i < source.length; i++){
    // }
    return source.map((photo: any) => {
        console.log("isi pgoto: ", photo);
        return <img src={photo} alt="" key={photo} />;
    });
    };

    const handleSimpan =async()=>{
        if(update){
            await updateDataProduct(createProduct, _id)
            dispatch(setCreateProduct('nama', ''))
            dispatch(setCreateProduct('jumlahBarang', ''))
            dispatch(setCreateProduct('harga', ''))
            dispatch(setCreateProduct('deskripsi', ''))
            dispatch(setCreateProduct('image', []))
            history.push('/seller/allUserProduct')
        } else{
            await createDataProduct(createProduct)
            dispatch(setCreateProduct('nama', ''))
            dispatch(setCreateProduct('jumlahBarang', ''))
            dispatch(setCreateProduct('harga', ''))
            dispatch(setCreateProduct('deskripsi', ''))
            dispatch(setCreateProduct('image', []))
            history.push('/seller/allUserProduct')
        }
    }

    return (
        <Router>
            <div className="flex flex-col p-6 mb-8 -mt-6">
                <p className="text-center font-sans font-semibold text-2xl text-green-500">{update ? 'UpDate' : 'Jual'} Barang {update ? 'Lama' : 'Baru'}</p>
                <form className="mb-32">
                    <label className="flex flex-row mb-2">Nama Barang</label>
                    <input type="text" value={nama} onChange={(e)=>dispatch(setCreateProduct('nama', e.target.value))} placeholder="nama barang..." className="rounded p-2 border border-black mb-4 w-full"/>
                    <label className="flex flex-row mb-2">Jumlah Barang</label>
                    <input type="text" value={jumlahBarang} onChange={(e)=>dispatch(setCreateProduct('jumlahBarang', e.target.value))} placeholder="jumlah barang" className="rounded p-2 border border-black mb-4"/>
                    <label className="flex flex-row mb-2">Harga</label>
                    <input type="text" value={harga} onChange={(e)=>dispatch(setCreateProduct('harga', e.target.value))} placeholder="harga barang nominal aja yang di masukin" className="rounded p-2 border border-black mb-4"/>
                    <label className="flex flex-row mb-2">Deskripsi</label>
                    <textarea name="deskripsi" value={deskripsi} onChange={(e)=>dispatch(setCreateProduct('deskripsi', e.target.value))} placeholder="deskripsi" className="rounded p-4 border border-black mb-4 w-full h-40 box-border"></textarea>
                    <p className="mb-2">Upload Gambar</p>
                    <div className="flex justify-center">
                        <div className="w-20 h-20">{renderPhotos(selectedFiles)}</div>
                        <input type="file" multiple 
                            onChange={handleImageChange}
                            accept="images/*"
                        />
                    </div>
                </form>
                <button className="bg-green-600 h-10 p-2 w-20 rounded-lg self-end my-10 mr-20" onClick={handleSimpan} >{update ? 'update' : 'simpan'}</button>
            </div>
        </Router>
    );
}

export default withRouter(CreateProduct);