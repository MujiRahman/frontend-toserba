import React from 'react'
import { useHistory } from 'react-router-dom';
import { dumy } from '../../../assets';

interface Props{

}

export const BlogItem: React.FC<Props> = () => {
    const history = useHistory();
    return (
        <section className="max-h-60 w-40 border-2 border-black rounded-lg shadow box-border p-1 box-border cursor-pointer" onClick={()=>history.push('/detail_product')}>
            <button>
                <img src={dumy} alt="img thumbnail" className="w-30 h-28 rounded"/>
            </button>
            <div className="px-1">
                <p className="font-sans break-words leading-tight">judul barang Lorem ipsum dolor sit</p>
                <p className=" text-lg font-medium">50.000</p>
                <p className="text-sm">jakarta</p>
                <div className="flex text-xs">
                    <p className="mr-1">4,7</p>
                    <p>terjual 67</p>
                </div>
            </div>
        </section>
    );
}