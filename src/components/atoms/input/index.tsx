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
            <p className="font-normal m-0 mb-2" >{label}</p>
            <input className={className} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default Input;
