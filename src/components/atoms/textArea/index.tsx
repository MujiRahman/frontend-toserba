import React from 'react'
import {input} from '../input'

interface Props extends input {
    
}

const TextArea: React.FC<Props> = ({label, placeholder}) => {
    return (
        <div>
            <p>{label}</p>
            <textarea className="rounded-lg py-2 pl-2 block border-2 border-black border-opacity-50" placeholder={placeholder}></textarea>
        </div>
    )
}

export default TextArea;