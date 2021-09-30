import React, { FC } from 'react'
import Tagihan from '../../components/atoms/tagihan';

interface Props{

}

const CheckOut: FC<Props> = () => {
    return (
        <div>
            <h1>Total Blanjaan</h1>
            <Tagihan />
            <span>-</span>
            <div className="flex">
                <p>Total Tagihan</p>
                <p>Rp 300.100</p>
            </div>
            <div className="flex">
                <button>Batal</button>
                <button>Bayar</button>
            </div>
        </div>
    )
}

export default CheckOut;
