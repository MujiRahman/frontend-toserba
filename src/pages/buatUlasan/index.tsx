import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { postUlasan } from '../../config/action/orderApi';
import { RootStore } from '../../config/redux';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

interface Prop{
    _id: string
}

const BuatUlasan = () => {
    const {pesenan} = useSelector((state: RootStore) => state.orderReduser)
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [hover, setHover] = useState<undefined>(undefined)
    const [isi, setIsi] = useState<string>("")
    const {_id} = useParams<Prop>()
    const props = {
        history :useHistory()
    };
    const stars = Array(5).fill(0)
    const productUlasan = pesenan.find((e: any)=> e._id === _id)

    const handleClick = (value: number) => {
        setCurrentValue(value)
        console.log('isi value clik',value)
    }

    const handleHover = (haver: any) => {
        setHover(haver)
        console.log('isi value hover',haver)
    }

    const handleHovered = ()=> {
        setHover(undefined)
    }

    const kirim =()=>{
        postUlasan(productUlasan.product, currentValue, isi, props)
    }
    console.log('isi ulasan product', currentValue, isi, _id)
    return (
        <div className='w-full'>
            <p className='text-lg'>Beri sedikit ulasannya dong...</p>
            <div className="ml-32 w-72">
                <img src={`http://localhost:4000/imagesById/${productUlasan.imageProduct}`} alt="gambar product"  className='w-52 h-52 rounded-lg mt-4 mb-2'/>
                <p>{productUlasan.namaBarang}</p>
                <div className="flex">
                    {
                        stars.map((_, index)=>{
                            return(
                                <FaStar
                                key={index}
                                onClick={()=> handleClick(index+1)}
                                onMouseOver={()=> handleHover(index+1)}
                                onMouseLeave={handleHovered}
                                color={(hover || currentValue) > index ? colors.orange : colors.grey}
                                className='w-8 h-8 mr-4 mb-4'
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className='ml-2 flex flex-col items-end gap-2' >
                <textarea className='w-full h-32 p-4' value={isi} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=> setIsi(e.target.value)}></textarea>
                <button className='w-20 p-2 bg-red-500 rounded-lg ' onClick={kirim}>kirim</button>
            </div>
        </div>
    )
}

export default BuatUlasan
