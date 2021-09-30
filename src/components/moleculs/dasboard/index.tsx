import React, { FC } from 'react'

interface Props{
    className: string
    // id:string
}
const Dashboard: FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <div>
                <p>Barang Terjual</p>
                <p>Chat Diskusi Product</p>
                <p>Chat Pribadi Product</p>
            </div>
        </div>
    )
}

export default Dashboard
