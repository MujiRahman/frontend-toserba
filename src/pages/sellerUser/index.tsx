import React, { FC, useState } from 'react'
import { AllProductUser } from '../../components/moleculs/allProduct';
import Dashboard from '../../components/moleculs/dasboard';
import Pesenan from '../../components/moleculs/pesanan';
import CreateProduct from '../createProduct';

interface Props{

}

const SellerUser: FC<Props> = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex max-w-7xl mx-auto bg-green-200">
            <div className="text-center h-1/2 w-40 border-2 border-black">
                <div className="p-6 border-black bg-red-100 cursor-pointer klik ">Dasboard </div>
                <div className="p-6 border-t-2 border-black bg-red-100 cursor-pointer ">Pesanan</div>
                <div className="p-6 border-t-2 border-black bg-red-100 cursor-pointer ">JualBarang</div>
                <div className="p-6 border-t-2 border-black bg-red-100 cursor-pointer ">All Product</div>
            </div>
            <div>
                <Dashboard className="klik-menu hidden"/>
                <Pesenan className="hidden"/>
                <CreateProduct className="hidden"/>
                <AllProductUser className="hidden" />
            </div>
        </div>
    )
}

export default SellerUser;
