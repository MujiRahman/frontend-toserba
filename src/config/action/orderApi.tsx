import axios from "axios"
const queryString = require('query-string');

export const setOrder = (satuanType: any, satuanValue: any) => {
    return{type: 'ORDER', satuanType, satuanValue }
}

export const orderBaru = (order: any) => (dispatch: any) => {
    
    for (let i = 0; i < order.length; i++) {
        const data = {
            namaBarang: order[i].namaBarang,
            jumlahBarang: order[i].jumlahBarangOrder,
            totalHarga: order[i].totalHargaOrder,
            alamat: order[i].alamatId,
            note: order[i].note,
        }
        console.log('isi data', data)
        axios.post(`http://localhost:4000/api/order/addOrder/${order[i]._id}`,queryString.stringify(data) , {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'auth-token' :  localStorage.getItem('token')
            }
        }).then(res => {
            console.log('post success', res);
            dispatch({
                type: 'BAYAR'
            })
        }).catch(err => {
            console.log('post gagal total');
        })
    }

}

export const getAllOrderan = () => (dispatch: any) => {
    axios.get('http://localhost:4000/api/order/addOrder', {
        headers:{
            'auth-token' :  localStorage.getItem('token')
        }
    }).then(res => {
        // console.log('isi orderan', res.data.data)
        dispatch({ type: 'ORDERAN', payload: res.data.data })
        
    }).catch(err => {
        console.log('isi err orderan', err)
    })
}

export const upDateOrderan = (id: string) => (dispatch: any) => {
    axios.post(`http://localhost:4000/api/order/upDateOrder/${id}`, {
        headers:{
            'auth-token' :  localStorage.getItem('token')
        }
    }).then(res => {
        console.log('isi orderan update', res.data.data)
        const sukses = res.data.data
        dispatch({
            type: 'ORDERAN-KIRIM',
            payload:{
                _id: sukses._id,
            }
        })
    }).catch(err => {
        console.log('isi err orderan', err)
    })
}

export const getAllPesenan = () => (dispatch: any) => {
    axios.get('http://localhost:4000/api/order/logOrder', {
        headers:{
            'auth-token' :  localStorage.getItem('token')
        }
    }).then(res => {
        console.log('isi orderan', res.data.data)
        dispatch({ type: 'PESENAN', payload: res.data.data })
        
    }).catch(err => {
        console.log('isi err orderan', err)
    })
}

export const upDatePesenan = (id: string, Prop:any) => (dispatch: any) => {
    axios.post(`http://localhost:4000/api/order/upDateOrder1/${id}`, {
        headers:{
            'auth-token' :  localStorage.getItem('token')
        }
    }).then(res => {
        const _id = res.data.data._id
        console.log('isi orderan update', res)
        dispatch({
            type: 'PESESNAN-KIRIM',
            payload:{_id: res.data.data._id}
        })
        Prop.history.push(`/profil/Ulasan/${_id}`)
    }).catch(err => {
        console.log('isi err orderan', err)
    })
}

export const postUlasan = (_id: string, currentValue: number , isi: string, props: any) =>  {
    const data = {
        ulasan: isi,
        rating: currentValue
    }
    console.log('isi ulasanapi', data)
    axios.post(`http://localhost:4000/api/ulasan/post/${_id}`, queryString.stringify(data), {
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'auth-token' :  localStorage.getItem('token')
        }
    }).then(res =>{
        console.log('isi res ulasan', res)
        props.history.push('/')
    }).catch(err =>{
        console.log('isi err ulasan', err)
    })
}