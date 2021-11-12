
import React from 'react'

interface Props{
    // className?:string
}

const Ulasan:React.FC<Props> = () => {
    return (
        <div className="flex w-2/5 mb-20 p-2 bg-red-300 ">
            <p className="mx-2">*****</p>
            <p className="">isi Ulasan</p>
        </div>
    )
}

export default Ulasan;