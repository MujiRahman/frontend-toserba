import React, { memo } from 'react'
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

const BlogItem: React.FC<Props> = (props) => {
    console.log('blog item reder')
    const {imge, judul, harga, asalKota, rating, terjual, _id} = props
    const history = useHistory();
    return (
        <section className="max-h-56 w-36 p-1 border-2 border-black rounded-lg shadow box-border box-border cursor-pointer" onClick={()=>history.push(`/detail_product/${_id}`)}>
            <button>
                <img src={imge} alt="img thumbnail" className="w-36 h-28 rounded"/>
            </button>
            <div className="">
                <p className="font-sans truncate leading-tight">{judul}</p>
                <p className=" text-lg font-medium">{harga}</p>
                <p className="text-sm">{asalKota}</p>
                <div className="flex justify-between text-xs">
                    <p className="mr-1">Terjual {terjual}</p>
                    <p>Rating {rating}</p>
                </div>
            </div>
        </section>
    );
}

export default memo(BlogItem)