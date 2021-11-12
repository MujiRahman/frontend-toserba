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
        console.log('post success', hasil);
        localStorage.setItem('user', JSON.stringify(hasil.user.nama))
        localStorage.setItem('token', hasil.token)
        dispatch({
            type: 'USER-LOGIN',
            payload: {
                user:hasil.user.nama,
                token:hasil.token,
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
        console.log('post gagal total',err);
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

export const updateUserApi = ( auth: any) => {
    const data ={
        user: auth.user,
        email : auth.email,
        noHp : auth.noHp,
        alamat: auth.alamat,
        Image: auth.image
    };

    console.log('isi auth token', auth.token)
    
    axios.put('http://localhost:4000/api/user/profil',queryString.stringify(data) , {
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'auth-token' :  auth.token
        }
    }).then(res =>{
        console.log('sukses update', res)
    }).catch(err =>{
        console.log('isi error update', err)
    })
}