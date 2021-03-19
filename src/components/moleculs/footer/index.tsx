import React from 'react'
import { facebook, github, instagram, youtube } from '../../../assets';

interface Props{
className?:string|undefined,
}

export const Footer: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <footer className="w-full max-h-26 bg-green-400 py-2 box-border">
                <h2 className="text-center font-medium">Dibuat oleh :</h2>
                <p className="text-center mb-2">Muji Rahman Sayuti</p>
                <div className="flex justify-center gap-4">
                    <a href="*" className="w-10 h-10">
                        <img src={facebook} alt="fb"/>
                    </a>
                    <a href="*" className="w-10 h-10">
                        <img src={instagram} alt="ig"/>
                    </a>
                    <a href="*" className="w-10 h-10">
                        <img src={github} alt="github"/>
                    </a>
                    <a href="*" className="w-10 h-10">
                        <img src={youtube} alt=""/>
                    </a>
                </div>
            </footer>
        </div>
    );
}