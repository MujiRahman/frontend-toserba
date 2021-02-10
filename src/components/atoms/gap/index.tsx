import React from 'react'

interface gap {
    width: number;
    height?: number;
}

const Gap: React.FC<gap> = ({width, height}) => {
    return (
        <div style={{width, height}} />
    )
}

export default Gap;
