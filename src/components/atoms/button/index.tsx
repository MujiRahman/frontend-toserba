import React from 'react'

interface button {
    onClick?: (Parameters: any)=>any |undefined
    children?: string 
    className?: string
}

const Button: React.FC<button> = ({children, className, onClick}) => {
    return (
        <div>
            <button className={className} onClick={onClick} >{children}</button>
        </div>
    )
}

export default Button;
