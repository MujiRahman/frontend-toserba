import React from 'react'
import { dumy } from '../../assets';

interface Props{

}

const DetailProduct: React.FC<Props> = () => {
    return (
        <div className="mx-6 mt-6">
            <div className="flex mx-6 mt-6 mb-6">
                <img src={dumy} alt="d.product" className="max-w-xs h-44 shadow rounded"/>
                <div className="block ml-6">
                    <h1>judul/nama barang</h1>
                    <h3>jumlah barang dan terjual</h3>
                    <p> keterangan barang yang harus diual Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum iure, nulla quidem corrupti necessitatibus doloremque quos adipisci voluptatem quam ipsam voluptate perferendis ut ipsum. Unde saepe debitis error voluptates.</p>
                </div>
            </div>
            <div className="flex p4 wfull border border-black rounded shadow justify-around">
                <button>Ulasan</button>
                <button>Diskusi</button>
            </div>
        </div>
    );
}

export default DetailProduct;