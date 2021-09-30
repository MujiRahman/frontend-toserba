/* eslint-disable eqeqeq */
/* eslint-disable no-useless-escape */
import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { registerbg } from '../../assets';
import PasswordPopover from '../../utils/passwordPopOver';

interface Props{

}

type FormInput = {
    namaLengkap : string;
    email : string;
    password : string;
    ulangPassword : string;

}

const Register: React.FC<Props> = () => {
    const history =useHistory();
    const { register, handleSubmit, errors, getValues, setError, clearErrors, formState, reset } = useForm<FormInput>();
    const onSubmit = (data: FormInput) => {
        if(data.password !== data.ulangPassword) {
            setError("password", {
                type: "passwordMatch",
                message: "Password dan Ulang Password tidak sama."
            });
            setError("ulangPassword", {
                type: "passwordMatch",
                message: "Password dan Ulang Password tidak sama.",
            });
        }
        history.push('/login')
        reset()
    }
    return (
        <section className="flex justify-center items-center h-screen box-border">
            <div className="hidden md:block md:w-2/3 xl:pl-24">
                <img src={registerbg} alt="g"/>
            </div>
            <div className="w-2/3 shadow-2xl py-10 md:w-1/3">
                <h2 className="text-center text-2xl font-sans font-medium mb-2">Buat Toko Kamu Sendiri</h2>
                <form className="p-4 lg:px-14">

                    <label className="flex flex-row">Nama Lengkap</label>
                    <input type="text" name= "namaLengkap" ref={register({required: "Nama Lengkap diButuhkan"})} className="mb-4 border border-black rounded w-full p-2" placeholder="masukan nama anda..."/>
                    {errors.namaLengkap && ( <p> {errors.namaLengkap.message} </p>)}

                    <label className="flex flex-row">Email</label>
                    <input type="text" name= "email" ref= {register({required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,})} className="mb-4 border border-black rounded w-full p-2" placeholder="masukan email anda..."/>
                    {errors.email && errors.email.type == "required" && (<p>Email diButuhkan </p>)}
                    {errors.email && errors.email.type == "pattern" && (<p>Email Salah </p>)}

                    <label className="flex flex-row">Password</label>
                    <PasswordPopover>
                        { (props) => (
                            <input type="text" name= "password" autoComplete="new-password" className="mb-4 border border-black rounded w-full p-2" placeholder="masukan password anda..." ref= {register({ required: "Password diButuhkan" })} onFocus= {() => props.visible(true)} onBlur={() => props.visible(false)} onChange= {() => props.validate("password", getValues, setError, clearErrors)} />
                            )
                        }
                    </PasswordPopover>
                    {errors.password && ( <p> {errors.password.message} </p>)}

                    <label className="flex flex-row">Ulangi Password</label>
                    <PasswordPopover>
                        { (props) => (
                            <input type="text" name= "ulangPassword" autoComplete="new-password" className="mb-4 border border-black rounded w-full p-2" placeholder="masukan Password lagi..." ref= {register({ required: "Password diButuhkan" })} onFocus= {() => props.visible(true)} onBlur={() => props.visible(false)} onChange= {() => props.validate("password", getValues, setError, clearErrors)} />
                            )
                        }
                    </PasswordPopover>
                    {errors.password && ( <p> {errors.password.message} </p>)}

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