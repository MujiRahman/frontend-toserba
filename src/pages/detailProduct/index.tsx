import React from 'react'
import { dumy } from '../../assets';
// import CreateProduct from '../createProduct';

interface Props{

}

const DetailProduct: React.FC<Props> = () => {
    return (
        <div>
            <div className="flex">
                <img src={dumy} alt="d.product" className="w-20 h-20 shadow"/>
                <div className="block">
                    <h2>judul/nama barang</h2>
                    <h4>jumlah barang dan terjual</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum iure, nulla quidem corrupti necessitatibus doloremque quos adipisci voluptatem quam ipsam voluptate perferendis ut ipsum. Unde saepe debitis error voluptates.</p>
                </div>
            </div>
            <div className="flex p4 wfull border border-black shadow">
                <button>Ulasan</button>
                <button>Diskusi</button>
            </div>
        </div>
    );
}

export default DetailProduct;