import React, { FC } from 'react'
// import { dumy } from '../../../assets'

interface Props{
    nama: string,
    image: string,
    harga: number,
    jumlah: number,
    total: number,
    note: string
}

const Tagihan: FC<Props> = ({nama, image, harga, jumlah, total, note}) => {
    return (
        <div className="flex gap-6 my-6">
            <img src={image} alt="g.product" className="w-20 h-20 rounded-lg " />
            <div className=" w-1/2" >
                <p className="text-lg font medium">{nama}</p>
                <div className="flex gap-10 text-small">
                    <p>Rp {harga}</p>
                    <p>{jumlah} buah</p>
                </div>
                <p>{note} </p>
            </div>
            <p>Rp {total}</p>
        </div>
    )
}

export default Tagihan
