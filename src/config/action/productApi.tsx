import axios from "axios"
const queryString = require('query-string');

export const setCreateProduct = (createProductType: any, createProductValue: any) => {
    return{ type:'CREATE-PRODUCT', createProductType, createProductValue}
}

export const setImagePrevs = (payload: any) => {
    return{ type:'IMAGE-PREVS', payload}
}

export const createDataProduct = (createProduct: any) => {
    const data = new FormData()
    for (let i = 0; i < createProduct.image.length; i++) {
        data.append('image', createProduct.image[i])
    }
    data.append('nama', createProduct.nama)
    data.append('harga', createProduct.harga)
    data.append('jumlahBarang', createProduct.jumlahBarang)
    data.append('deskripsi', createProduct.deskripsi)

    console.log('isi data', createProduct)
    axios.post('http://localhost:4000/api/product/post',data , {
        headers:{
            'Content-Type': 'multipart/form-data',
            'auth-token' :  localStorage.getItem('token')
        }
    }).then(res => {
        console.log('post success', res);
    }).catch(err => {
        console.log('post gagal total', err);
    })
}

export const getAllDataUser = () => (dispatch: any) => {
    axios.get('http://localhost:4000/api/product/posts/ByUser',{headers:{
        'auth-token' :  localStorage.getItem('token')
    }})
        .then(result => {
            const responApi = result.data;
            console.log('isi user Product', result)
            dispatch({ type: 'GET-ALL-PRODUCT-USER', payload: responApi.data })
        })
        .catch(err => {
            console.log('isi err', err)
        })
};

export const updateDataProduct = (createProduct: any, _id: string) => {
    const data = new FormData()
    for (let i = 0; i < createProduct.image.length; i++) {
        data.append('image', createProduct.image[i])
    }
    data.append('nama', createProduct.nama)
    data.append('harga', createProduct.harga)
    data.append('jumlahBarang', createProduct.jumlahBarang)
    data.append('deskripsi', createProduct.deskripsi)

    axios.put(`http://localhost:4000/api/product/post/${_id}`,data , {
        headers:{
            'Content-Type': 'multipart/form-data',
            'auth-token' :  localStorage.getItem('token')
        }
    }).then(res => {
        console.log('post success', res);
    }).catch(err => {
        console.log('post gagal total');
    })
}

export const getAllDiskusi = () => {
    
}
export const postDiskusi = (diskusi:string, _id:string) => {
    console.log('isi diskusi api', diskusi , _id)
    // const data = new FormData()
    // data.append('comment', diskusi)
    const data ={
        comment : diskusi
    }

    axios.post(`http://localhost:4000/api/diskusi/post/${_id}`, queryString.stringify(data), {
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'auth-token' :  localStorage.getItem('token')
        }
    }).then(res=> {
        console.log('post diskusi berhasil', res)
    }).catch(err =>{
        console.log('isi payah err diskusi', err)
    })
}