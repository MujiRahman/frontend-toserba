import React from 'react'

export interface input{
    label?: string;
    placeholder?: string | undefined;
    className?: string;
    type?: string |undefined;
}

const Input: React.FC<input> = ({label, placeholder, type, className}) => {
    return (
        <div>
            <input className={className} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default Input;
