// import React, { Children, FC, ReactNode } from 'react'

// import { dumy } from "../../../assets"

interface butonInput{
    img: string,
    onChange:(e:any)=>void,
    
}

const ButtonInput= (Props: butonInput) => {
    // if (Props.img){
    //     return (
    //         <div className="my-8">
    //             { Props.img && <img className="w-20 h-20 cover block mb-8" src= {Props.img} alt="preview"/>}
    //             <input type="file" onChange={Props.onChange}/>
    //         </div>
    //     )
    // } else{
    //     return(
    //         <>
    //             <img className="w-20 h-20 cover block mb-8" src= {dumy} alt="preview"/>
    //             <input type="file" onChange={Props.onChange}/>
    //         </>
    //     )
    // }
    return (
        <div className="my-8">
            { Props.img && <img className="w-20 h-20 cover block mb-8" src= {Props.img} alt="preview"/>}
            <input type="file" onChange={Props.onChange}/>
        </div>
    )
}

export default ButtonInput
