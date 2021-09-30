
import React from 'react'

interface Props{
    className?:string
}

const Ulasan:React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <p className="w-5/12 p-2 my-4">Ulasan</p>
                <p className="pl-6 my-2">isi Ulasan</p>
        </div>
    )
}

export default Ulasan;