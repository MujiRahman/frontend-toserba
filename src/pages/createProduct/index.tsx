import React from 'react'
import { dumy } from '../../assets';

interface Props{
    className:string
}

const CreateProduct: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <div className="p-6 mb-8 -mt-6">
                <p className="text-center font-sans font-semibold text-2xl text-green-500">Jual Barang Baru</p>
                <form className="">
                    <label className="flex flex-row mb-2">Nama Barang</label>
                    <input type="text" placeholder="nama barang..." className="rounded p-2 border border-black mb-4 w-full"/>
                    <label className="flex flex-row mb-2">Jumlah Barang</label>
                    <input type="text" placeholder="jumlah barang" className="rounded p-2 border border-black mb-4"/>
                    <label className="flex flex-row mb-2">Deskripsi</label>
                    <textarea name="deskripsi" placeholder="deskripsi" className="rounded p-4 border border-black mb-4 w-full h-40 box-border"></textarea>
                    <p className="mb-2">Upload Gambar</p>
                    <div className="flex justify-center">
                        <div>
                            <input type="file" />
                            <img src={dumy} className="w-10 h-10 hidden" alt="preview"/>
                        </div>
                        <div>
                            <input type="file" />
                            <img src={dumy} className="w-10 h-10 hidden" alt="preview"/>
                        </div>
                        <div>
                            <input type="file" />
                            <img src={dumy} className="w-10 h-10 hidden" alt="preview"/>
                        </div>
                        <div>
                            <input type="file" />
                            <img src={dumy} className="w-10 h-10 hidden" alt="preview"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;