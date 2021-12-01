import axios from "axios";
// import { dumy } from "../../assets";
const queryString = require('query-string');

export const setForm = (formType: any, formValue: any) => {
    return {type: 'USER-LOGIN', formType, formValue}
}

export const setRegisterUser = (registerUserType: any, registerUserValue: any) => {
    return {type: 'USER-REGISTER', registerUserType, registerUserValue}
}

export const setAuth = (authType: any, authValue: any) => {
    return{ type: 'UPDATE-USER', authType, authValue}
}

export const setImagePrev = (payload: any) => {
    return{ type: 'IMAGE-PREV', payload}
}

export const loginUserApi = (form:any, props: any ) =>(dispatch: any) => {
    const data ={
        email : form.email,
        password : form.password
    };
    
    axios.post('http://localhost:4000/api/user/login',queryString.stringify(data) , {
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        const hasil = res.data;
        console.log('post success12', hasil.status, hasil);
        localStorage.setItem('user', JSON.stringify(hasil.user.nama))
        localStorage.setItem('token', hasil.token)
        dispatch({
            type: 'USER-LOGIN',
            payload: {
                user:hasil.user.nama,
                asalKota:hasil.user.asalKota,
                image: hasil.user.imageProfil,
                email: hasil.user.email,
                password: hasil.user.password,
                rePassword: hasil.user.rePassword,
                noHp: hasil.user.noHp,
                alamat: hasil.user.alamat,
                productId: hasil.user.productId,
                orderId: hasil.user.orderId,
                pesenanId: hasil.user.pesenanId,
                id: hasil.user._id
            }
        })
        dispatch({
            type: 'IMAGE-PREV',
            payload: hasil.user.image
        })
        props.history.push('/')
    }).catch(err => {
        console.log('post gagal total',err.response.data.message);
        if(err.response.data.message === 'Email yang anda masukan salah!'){
            dispatch({
                type:'ERROR-LOGIN',
                payload:{
                    message: err.response.data.message,
                    errorsEmail: true,
                    errorsPassord: false
                }
            })
        } 
        if(err.response.data.message === 'Password Anda Salah!'){
            dispatch({
                type:'ERROR-LOGIN',
                payload:{
                    message: err.response.data.message,
                    errorsEmail: false,
                    errorsPassord: true,
                }
            })
        }
    })
}

export const registerUserApi = (data:any, props: any ) => {
    const dataRegister ={
        nama : data.nama,
        email : data.email,
        password : data.password,
        rePassword: data.rePassword
    };
    
    console.log('isi data register', dataRegister)
    axios.post('http://localhost:4000/api/user/register', queryString.stringify(dataRegister) , {
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        
        console.log('post success');
        props.history.push('/login')
    }).catch(err => {
        console.log('post gagal total',err);
    })
}

export const updateUserApi = ( auth: any, props: any) => (dispatch: any) => {
    const data = new FormData();
    data.append('nama', auth.user)
    data.append('email', auth.email)
    data.append('noHp', auth.noHp)
    data.append('alamat', auth.alamat)
    data.append('asalKota', auth.asalKota)
    data.append('image', auth.image)

    axios.put('http://localhost:4000/api/user/profil',data , {
        headers:{
            'Content-Type': 'multipart/form-data',
            'auth-token' :  localStorage.getItem('token')
        }
    }).then(res =>{
        const hasil = res.data;
        console.log('sukses update', res)
        dispatch({
            type: 'USER-UPDATE',
            payload: {
                user:hasil.data.nama,
                asalKota:hasil.data.asalKota,
                image: hasil.data.imageProfil,
                email: hasil.data.email,
                password: hasil.data.password,
                rePassword: hasil.data.rePassword,
                noHp: hasil.data.noHp,
                alamat: hasil.data.alamat,
                productId: hasil.data.productId,
                orderId: hasil.data.orderId,
                pesenanId: hasil.data.pesenanId,
                id: hasil.data._id
            }
        })
        props.history.push('/profil')
    }).catch(err =>{
        console.log('isi error update', err)
    })
}