import React from 'react'
import { Link } from 'react-router-dom'
import { hum, toko } from '../../../assets'

const NotHeader = () => {
    return (
        <nav className="absolute shadow w-full bg-white flex justify-evenly py-4 px-16 items-center z-20">
            <div className="w-1/2 md:w-2/12 lg:ml-4  ">
                <div className=" inline-flex justify-start items-start md:flex">
                    <button className="w-8 h-5 md:hidden">
                        <img src={hum} alt="humberger menu"/>
                    </button>
                    <a href="http://localhost:3000/" className="hidden md:block">
                        <img src={toko} alt="gambar toko" className="w-15 h-12"/>
                    </a>
                    <div className="w-15 h-7 px-2 border border-black rounded ml-2 md:hidden">
                        <input type="text" name="search" placeholder="pencarian di sini..." />
                    </div>
                </div>
            </div>
            <div className="hidden md:block md w-9/12 lg:-ml-28">
                <div className="flex justify-evenly items-center space-x-2">
                    <button className="from-green-400 bg-mid-gray mr-2">
                        kategori
                    </button>
                    <input type="text" name="search" id="search" placeholder="pencarian di sini..." className="w-full h-10  border-2 rounded p-2 px-2 ml-5"/>
                </div>
            </div>
            <div className="w-1/2 mr-10 ml-16 md:w-1/12">
                <div className="flex justify-evenly gap-12">
                        <Link to='/register'><button className='hover:bg-green-400 p-2'>Register</button></Link> 
                        <Link to='/login'><button className='hover:bg-green-400 p-2'>Login</button></Link>
                    </div>
            </div>
        </nav>
    )
}

export default NotHeader
