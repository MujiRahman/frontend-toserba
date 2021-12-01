import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps, useParams, BrowserRouter as Router, Link, Switch, Route, useHistory } from 'react-router-dom';
import Bucket from '../../components/atoms/bucket';
import Diskusi from '../../components/moleculs/diskusi';
import Ulasan from '../../components/moleculs/ulasan';
import { setOrder } from '../../config/action/orderApi';
import { RootStore } from '../../config/redux';

interface setDetail{
    _id: string,
    nama: string,
    deskripsi: string,
    jumlahBarang: number ,
    harga: number,
    imageId: gambar[],
    terjual: number,
    ulasanId: string[],
    diskusiId: string[],
    rating: number
}
interface gambar{
    imageUrl :string
}
type idParam = {
    _id: string;
};
const DetailProduct:React.FunctionComponent<RouteComponentProps> = () => {
    const { isAuthenticated, auth } = useSelector((state: RootStore) => state.userReducer);
    const { satuan } = useSelector((state: RootStore)=> state.orderReduser)
    const { getDiskusi } = useSelector((state: RootStore)=> state.productReducer)
    const { alamat } = auth
    const { jumlahBarangOrder, harga, totalHargaOrder, stock} = satuan;
    const [data, setData] = useState<setDetail | null>(null)
    const {_id} = useParams<idParam>()
    const dispatch = useDispatch()
    const history = useHistory()
    const [gambar, setGambar] = useState<number >(0)
    
    useEffect(() => {
        axios.get(`http://localhost:4000/api/product/post/${_id}`)
            .then(result => {
                console.log('isi api', result.data)
                setData(result.data.data)
                dispatch({
                    type: 'GET-DISKUSI',
                    payload: result.data.data2
                })
                dispatch({
                    type: 'GET-ULASAN',
                    payload: result.data.data3
                })
                dispatch(setOrder('harga', data?.harga))
                dispatch(setOrder('totalHargaOrder', data?.harga))
                dispatch(setOrder('stock', data?.jumlahBarang))
                dispatch(setOrder('jumlahBarangOrder', 1))
            })
            .catch(err => {
                console.log('isi err', err)
            })
        return(()=>{
            dispatch(setOrder('harga', 0))
            dispatch(setOrder('totalHargaOrder', 0))
            dispatch(setOrder('jumlahBarangOrder', 1))
            dispatch(setOrder('stock', 0))
        })
    },[_id, data?.harga, data?.jumlahBarang, dispatch, getDiskusi.length])
    
    console.log('isi order', satuan, data)
    const handleBucket = () => {
        if(!isAuthenticated) {
            return alert('mohon login dulu untuk melanjutkanya!!!')
        }
        dispatch(setOrder('namaBarang', data?.nama))
        dispatch(setOrder('image', data?.imageId[0].imageUrl))
        dispatch(setOrder('_id', _id))
        dispatch(setOrder('alamatId', alamat))
        dispatch({type: 'ORDERS'})
        history.push("/checkout")
    }

    const tambahBlanjaan = () => {
        if(!isAuthenticated) {
            return alert('mohon login dulu untuk melanjutkanya!!!')
        }
        dispatch(setOrder('namaBarang', data?.nama))
        dispatch(setOrder('image', data?.imageId[0].imageUrl))
        dispatch(setOrder('_id', _id))
        dispatch(setOrder('alamatId', alamat))
        dispatch({type: 'ORDERS'})
    }

    return( <Router>
                <div className="max-w-6xl mx-auto">
                    <div className="flex my-6 z-30">
                        <div>
                            <img src={`http://localhost:4000/${data?.imageId[gambar].imageUrl}`} alt="d.product" className="w-80 h-80 rounded"/>
                            <div  className= "flex my-2">
                                <img src={`http://localhost:4000/${data?.imageId[0].imageUrl}`} alt="d.product" className="w-20 h-20 rounded" onClick={()=> setGambar(0)}/>
                                <img src={`http://localhost:4000/${data?.imageId[1].imageUrl}`} alt="d.product" className="w-20 h-20 rounded mx-4" onClick={()=> setGambar(1)}/>
                                <img src={`http://localhost:4000/${data?.imageId[2].imageUrl}`} alt="d.product" className="w-20 h-20 rounded" onClick={()=> setGambar(2)}/>
                            </div>
                        </div>
                        <div className="block ml-16 w-5/12">
                            <h1 className="text-2xl">{data?.nama}</h1>
                            <div className="flex gap-8 my-4">
                                <p>Terjual {data?.terjual}</p>
                                <p>Ulasan {data?.ulasanId.length}</p>
                                <p>Diskusi {data?.diskusiId.length}</p>
                                <p className="flex gap-1">Rating {data?.rating} <FaStar color={"#FFBA5A"}/></p>
                            </div>
                            <p className="text-xl">Rp{data?.harga}</p>
                            <p className="p-2 pl-2 w-full my-2 border-t-2 border-b-2 border-gray-200"> Detail</p>
                            <p>{data?.deskripsi}</p>
                        </div>
                        <Bucket 
                            className="ml-16" 
                            onclick={handleBucket}
                            tambahKranjang={tambahBlanjaan}
                            note={(e: any)=>dispatch(setOrder('note', e.target.value))}
                            tambah={() => {
                                dispatch(setOrder('jumlahBarangOrder', jumlahBarangOrder >= stock ? stock : jumlahBarangOrder + 1))
                                dispatch(setOrder('totalHargaOrder', harga + (harga * jumlahBarangOrder)))
                            }}
                            kurang={() => {
                                dispatch(setOrder('jumlahBarangOrder', jumlahBarangOrder <= 1 ? 1 : jumlahBarangOrder - 1))
                                dispatch(setOrder('totalHargaOrder', jumlahBarangOrder <= 1 ? harga : (harga * jumlahBarangOrder) - harga ))
                            }}
                            totalHarga={totalHargaOrder}
                            jumlah={jumlahBarangOrder}
                            stock={data?.jumlahBarang}
                        />
                    </div>
                    <div className="flex mb-4 p4 w-44 justify-between border-b-2">
                        <Link to={`/detail_product/${_id}`}><button className="p-2 focus:bg-gray-200">Diskusi</button></Link>
                        <Link to={`/detail_product/ulasan/${_id}`}><button className="p-2 focus:bg-gray-200">Ulasan</button></Link>
                    </div>
                    <Switch>
                        <Route path={`/detail_product/${_id}`}>
                            <Diskusi _id={_id} />
                        </Route>
                        <Route path={`/detail_product/ulasan/${_id}`}>
                            <Ulasan/>
                        </Route>
                    </Switch>
                </div>
            </Router>
    )
}
export default withRouter(DetailProduct);

