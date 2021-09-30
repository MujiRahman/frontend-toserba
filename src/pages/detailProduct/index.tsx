import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { withRouter, RouteComponentProps, useParams } from 'react-router-dom';
import Bucket from '../../components/atoms/bucket';
// import Diskusi from '../../components/moleculs/diskusi';
// import Ulasan from '../../components/moleculs/ulasan';
// import { idText } from 'typescript';
// import { dumy } from '../../assets';

interface Detail{
// _id : number
}
interface setDetail{
    nama: string,
    deskripsi: string,
    jumlahBarang: number ,
    harga: number,
    imageId: gambar[] 
}
interface gambar{
    imageUrl :string
}
type idParam = {
    _id: string;
};
const DetailProduct:React.FunctionComponent<Detail & RouteComponentProps> = (props) => {
    const [data, setData] = useState<setDetail | null>(null)
    const {_id} = useParams<idParam>()
    console.log('isi props', data, _id)
    useEffect(() => {
        // const _id =  props.match.params
        axios.get(`http://localhost:4000/api/product/post/${_id}`)
            .then(result => {
                setData(result.data.data)
            })
            .catch(err => {
                console.log('isi err', err)
            })

    },[_id])
    return(
            <div className="max-w-6xl mx-auto">
                <div className="flex my-6">
                    <div>
                        <img src={`http://localhost:4000/${data?.imageId[0].imageUrl}`} alt="d.product" className="w-80 h-80 rounded"/>
                        <div  className= "flex my-2">
                            <img src={`http://localhost:4000/${data?.imageId[0].imageUrl}`} alt="d.product" className="w-20 h-20 rounded"/>
                            <img src={`http://localhost:4000/${data?.imageId[1].imageUrl}`} alt="d.product" className="w-20 h-20 rounded mx-4"/>
                            <img src={`http://localhost:4000/${data?.imageId[2].imageUrl}`} alt="d.product" className="w-20 h-20 rounded"/>
                        </div>
                    </div>
                    <div className="block ml-20 w-5/12">
                        <h1 className="text-2xl">{data?.nama}</h1>
                        <div className="flex gap-8 my-4">
                            <p>terjual</p>
                            <p>ulasan</p>
                            <p>diskusi</p>
                        </div>
                        <p className="text-xl">Rp{data?.harga}</p>
                        <p className="p-2 pl-2 w-full my-2 border-t-2 border-b-2 border-gray-200"> Detail</p>
                        <p>{data?.jumlahBarang}</p>
                        <p>{data?.deskripsi}</p>
                    </div>
                    <Bucket className="fixed right-20"/>
                </div>
                
                <div className="flex mb-4 p4 w-44 justify-between  border-b-2">
                    <button className="p-2">Diskusi</button>
                    <button className="p-2">Ulasan</button>
                </div>
            </div>
    )
}

export default withRouter(DetailProduct);