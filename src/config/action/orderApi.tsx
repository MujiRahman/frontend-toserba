import axios from "axios"
const queryString = require('query-string');

export const setOrder = (satuanType: any, satuanValue: any) => {
    return{type: 'ORDER', satuanType, satuanValue }
}

export const orderBaru = (order: any) => {
    
    for (let i = 0; i < order.length; i++) {
        const data = {
            namaBarang: order[i].namaBarang,
            jumlahBarang: order[i].jumlahBarangOrder,
            totalHarga: order[i].totalHargaOrder,
            alamat: order[i].alamatId,
            note: order[i].note,
            // imageProduct: order[i].image
        }
        console.log('isi data', data)
        axios.post(`http://localhost:4000/api/order/addOrder/${order[i]._id}`,queryString.stringify(data) , {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'auth-token' :  localStorage.getItem('token')
            }
        }).then(res => {
            console.log('post success', res);
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
        console.log('isi orderan', res.data.data)
        dispatch({ type: 'ORDERAN', payload: res.data.data })
        
    }).catch(err => {
        console.log('isi err orderan', err)
    })
}

export const upDateOrderan = (id: string)   => {
    axios.post(`http://localhost:4000/api/order/upDateOrder/${id}`, {
        headers:{
            'auth-token' :  localStorage.getItem('token')
        }
    }).then(res => {
        console.log('isi orderan update', res)
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

export const upDatePesenan = (id: string)   => {
    axios.post(`http://localhost:4000/api/order/upDateOrder/${id}`, {
        headers:{
            'auth-token' :  localStorage.getItem('token')
        }
    }).then(res => {
        console.log('isi orderan update', res)
    }).catch(err => {
        console.log('isi err orderan', err)
    })
}





// namaBarang, jumlahBarang, totalHarga, alamat, note
    // const data = new FormData()
    // data.append('namaBarang', order[i].nama)
    // data.append('jumlahBarang', order[i].harga)
    // data.append('totalHarga', order[i].jumlahBarang)
    // data.append('alamat', order[i].deskripsi)
    // data.append('alamat', order[i].deskripsi)