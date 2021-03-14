import React from 'react'
import { messege } from '../../../assets'

interface Props{
    className?:string |undefined,
    // children?: ReactNode,
}

export const Messagge: React.FC<Props> = ({className}) =>{
    return(
        <div className={className}>
            <div className="dropdown inline-block relative ">
                <button className="p-2 rounded inline-flex items-center hover:bg-gray-100">
                    <img src={messege} alt="message" className="w-8"/>
                </button>
                <div className="dropdown-menu absolute hidden w-40 -left-12 shadow-2xl p-2 bg-white">
                    <button className="text-xs py-1 px-2 my-2 w-full text-justify block whitespace-no-wrap hover:bg-gray-200">Chat</button>
                    <button className="text-xs py-1 px-2 my-2 w-full text-justify block whitespace-no-wrap hover:bg-gray-200">Dikusi</button>
                    <button className="text-xs py-1 px-2 my-2 w-full text-justify block whitespace-no-wrap hover:bg-gray-200">Ulasan</button>
                    <button className="text-xs py-1 px-2 my-2 w-full text-justify block whitespace-no-wrap hover:bg-gray-200">Pesan Bantuan</button>
                    <button className="text-xs py-1 px-2 my-2 w-full text-justify block whitespace-no-wrap hover:bg-gray-200">Pesanan Dikomplain</button>
                </div>
            </div>
        </div>
    )
}

