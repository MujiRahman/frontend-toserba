import React, { FC } from 'react'

interface Props{
    className:string
}

const Pesenan: FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <div className="grid">
                <img src="" alt="" />
                <p>nama barang pesanan</p>
                <p>jumlah pesanan</p>
                <p>nama pemesan</p>
                <p>catatan jika ada</p>
                <p>alamat pemesan</p>
                <p>kirim</p>
            </div>
        </div>
    )
}

export default Pesenan
