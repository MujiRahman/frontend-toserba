import { product } from "../../models/model"

const initialStateHome: product = {
    createProduct:{
        nama: '',
        harga: 0,
        jumlahBarang: 0,
        deskripsi: '',
        image: []
    },
    productUser: [],
    getDiskusi:[],
    getUlasan:[]
    // adaDiskusi: false
}

const productReducer = (state = initialStateHome, action: any) => {
    switch (action.type) {
        case 'CREATE-PRODUCT':
            return{
                ...state,
                createProduct:{
                    ...state.createProduct,
                    [action.createProductType] : action.createProductValue
                }
            }
        case 'GET-ALL-PRODUCT-USER':{
            return{
                ...state,
                productUser: action.payload
            }
        }
        case 'HAPUS-PRODUCT':{
            let hapusProduct = state.productUser.filter((e: any)=> e._id !== action.payload._id)
            return{
                ...state,
                productUser: hapusProduct
            }
        }
        case 'GET-DISKUSI':{
            return{
                ...state,
                getDiskusi: action.payload,
            }
        }
        case 'POST-DISKUSI':{
            const diskusi = state.getDiskusi;
            diskusi.push(action.payload.Comment)
            return{
                ...state,
                getDiskusi: diskusi
            }
        }
        case 'GET-ULASAN':{
            return{
                ...state,
                getUlasan: action.payload
            }
        }
    }
    return state;
}

export default productReducer
