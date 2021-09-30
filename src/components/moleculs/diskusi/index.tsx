import React from 'react'

interface Props{
className?: string
}

const Diskusi:React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <div  className=" w-5/12 pl-6">
                <p className="my-2">isi diskusi</p>
                <div className="flex gap-2">
                    <input name="diskusi" className="border-2 border-greey w-full"></input>
                    <button className="bg-blue-600 p-2">kirim</button>
                </div>
            </div>
        </div>
    )
}

export default Diskusi;