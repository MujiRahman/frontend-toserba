import React from 'react'
import { dumy } from '../../../assets';

interface Props{

}

export const BlogItem: React.FC<Props> = () => {
    return (
        <section className="max-h-64 w-48 border-2 border-black rounded-lg shadow">
            <button>
                <img src={dumy} alt="img thumbnail" className="w-25 h-28 mx-2 mt-1 rounded"/>
            </button>
            <div className="p-2">
                <p className="font-sans break-words">Lorem ipsum dolor sit aqwesfhggfds</p>
                <p className="text-lg font-medium">50.000</p>
                <p>jakarta</p>
                <div className="flex text-sm">
                    <p className="mr-2">4,7</p>
                    <p>terjual 67</p>
                </div>
            </div>
        </section>
    );
}