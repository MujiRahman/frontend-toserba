import React from 'react'
import { useHistory } from 'react-router-dom';

interface Props{
    imge: string,
    judul: string,
    harga: number | string,
    asalKota: string,
    rating: string |number,
    terjual: string | number,
    _id: string 
}

export const BlogItem: React.FC<Props> = (props) => {
    const {imge, judul, harga, asalKota, rating, terjual, _id} = props
    const history = useHistory();
    return (
        <section className="max-h-60 w-40 border-2 border-black rounded-lg shadow box-border p-1 box-border cursor-pointer" onClick={()=>history.push(`/detail_product/${_id}`)}>
            <button>
                <img src={imge} alt="img thumbnail" className="w-40 h-28 rounded"/>
            </button>
            <div className="px-1">
                <p className="font-sans break-words leading-tight">{judul}</p>
                <p className=" text-lg font-medium">{harga}</p>
                <p className="text-sm">{asalKota}</p>
                <div className="flex text-xs">
                    <p className="mr-1">{rating}</p>
                    <p>{terjual}</p>
                </div>
            </div>
        </section>
    );
}