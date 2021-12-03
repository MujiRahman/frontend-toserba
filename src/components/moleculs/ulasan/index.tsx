import React, { memo, useMemo } from 'react'
import { FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../config/redux';



const Ulasan = () => {
    const {getUlasan} = useSelector((state: RootStore)=> state.productReducer)
    useMemo(() => getUlasan, [getUlasan])
    return (
        <>
        {
            getUlasan.map((ulas: any)=>{
                const stars = Array(ulas.rating).fill(0)
                return(
                    <div className="flex">
                        <img src={`http://localhost:4000/${ulas.gambar}`} alt="gambar user" className='w-20 h-20 rounded-full mr-4'/>
                        <div className=" w-2/5 mb-20 p-2 ">
                            <div className="flex mb-1">
                                {
                                    stars.map((_, index)=>{
                                        return(
                                            <FaStar
                                            key={index}
                                            color={"#FFBA5A"}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <p className="text-sm">{ulas.ulasan}</p>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default memo(Ulasan);