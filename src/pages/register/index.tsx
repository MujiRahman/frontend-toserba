/* eslint-disable eqeqeq */
/* eslint-disable no-useless-escape */
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerbg } from '../../assets';
import {  registerUserApi, setRegisterUser } from '../../config/action/userApi';

type FormInput = {
    nama : string;
    email : string;
    password : string;
    rePassword : string;
}

const Register = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, formState, watch, setError } = useForm<FormInput>();
    const password = useRef({});
    password.current = watch("password", "");
    const props = {
        history :useHistory()
    };

    const onSubmit = (data: FormInput) => {
        console.log('isi data',data)
        if(data.password !== data.rePassword) {
            setError("rePassword", {
                type: "passwordMatch",
                message: "Password dan Ulang Password tidak sama.",
            });
            return
        }
        registerUserApi(data, props)
    }
    console.log('isi error', errors)
    return (
        <section className="flex justify-center items-center h-screen box-border">
            <div className="hidden md:block md:w-2/3 xl:pl-24">
                <img src={registerbg} alt="g"/>
            </div>
            <div className="w-2/3 shadow-2xl py-10 z-20 md:w-1/3">
                <h2 className="text-center text-2xl font-sans font-medium mb-2">Buat Toko Kamu Sendiri</h2>
                <form className="p-4 lg:px-14" onSubmit={x => x.preventDefault()}>
                    <label className="flex flex-row">Nama Lengkap</label>
                    <input 
                        type="text"
                        name= "nama" 
                        ref={register({required: "Nama Lengkap diButuhkan"})} 
                        className="mb-4 border border-black rounded w-full p-2" placeholder="masukan nama anda..."
                        onChange={(e) => dispatch(setRegisterUser('nama', e.target.value))}
                        />
                    {errors.nama && ( <p className="relative -mt-2 mb-2 text-xs text-red-400">* {errors.nama.message} </p>)}

                    <label className="flex flex-row">Email</label>
                    <input 
                        type="text" 
                        name= "email" 
                        ref= {register({required: true, 
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,})} 
                        className="mb-4 border border-black rounded w-full p-2" placeholder="masukan email anda..."
                        onChange={(e) => dispatch(setRegisterUser('email', e.target.value))}
                        />
                    {errors.email && errors.email.type == "required" && (<p className="relative -mt-2 mb-2 text-xs text-red-400">* Email diButuhkan </p>)}
                    {errors.email && errors.email.type == "pattern" && (<p className="relative -mt-2 mb-2 text-xs text-red-400">* Email Salah </p>)}

                    <label className="flex flex-row">Password</label>
                        <input 
                            type="password" 
                            name= "password"
                            onChange= {(e) =>dispatch(setRegisterUser('password', e.target.value))}
                            autoComplete="new-password" 
                            className="mb-4 border border-black rounded w-full p-2" placeholder="masukan password anda..." 
                            ref={register({
                                required: "* Password diButuhkan" ,
                                minLength: 8
                            })}
                            />
                    {errors.password && errors.password.type == 'minLength' && ( <p className="relative -mt-2 mb-2 text-xs text-red-400">* Password diButuhkan minimal 8 karakter</p>)}
                    {errors.password && <p className="relative -mt-2 mb-2 text-xs text-red-400">{errors.password.message}</p>}
                    <label className="flex flex-row">Ulangi Password</label>
                        <input 
                            type="password" 
                            name= "rePassword" 
                            autoComplete="new-password" 
                            className="mb-4  border border-black rounded w-full p-2" 
                            placeholder="masukan Password lagi..."
                            ref= {register({
                                    required: "* Ulang Password diButuhkan",
                                    })}
                            onChange= {(e) =>dispatch(setRegisterUser('rePassword', e.target.value))} 
                            />
                    {errors.rePassword && ( <p className="relative -mt-2 mb-2 text-xs text-red-400"> {errors.rePassword.message} </p>)}

                </form>
                <div className="flex justify-evenly">
                    <button className="bg-red-500 py-2 px-4 rounded-2xl" >Cencel</button>
                    <button className="bg-blue-500 py-2 px-4 rounded-2xl" onClick={handleSubmit(onSubmit)} disabled={formState.isSubmitting}>Register</button>
                </div>
            </div>
        </section>
    );
}

export default Register;