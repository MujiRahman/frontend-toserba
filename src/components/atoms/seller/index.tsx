import React from 'react';
import { useHistory } from 'react-router-dom';
import { dumy } from '../../../assets';

interface Props{
className?:string|undefined,
// onClick?:()=> void|undefined,
}

export const Seller: React.FC<Props> = ({className}) => {
    const history = useHistory();
    return (
        <div className={className}>
            <div className="dropdown inline-block relative">
                <button className="p-2 rounded text-sm font-semibold hover:bg-gray-100">Seller</button>
                <div className="dropdown-menu absolute hidden max-w-sm p-2 -left-80 shadow-2xl rounded bg-white box-border">
                    <div className="flex mb-2 p-2 cursor-pointer hover:bg-gray-100">
                        <img src={dumy} alt="dumyprofil" className="w-10 rounded-full"/>
                        <div className="ml-2">
                            <p className="text-base">Nama pengguna</p>
                            <div className="flex space-x-2">
                                <p className="text-xs">Reguler mercent</p>
                                <button className="text-xs text-green-500">Upgrade menjadi Power Mercent?</button>
                            </div>
                        </div>
                    </div>
                    <hr className=" border border-grey-500 mb-1"/>
                    <p className=" font-semibold p-1 ">Tokopedia Seller</p>
                    <p className="-mt-2 text-xs p-2">Pantau pesanan yang masuk dan cek perkembangan tokomu secara rutin di satu tempat</p>
                    <button className="w-full whitespace-no-wrap p-2 bg-green-500 hover:bg-green-700" onClick={()=>history.push('/seller')}>cek Tokopedia Seller</button>
                </div>
            </div>
        </div>
    );
}