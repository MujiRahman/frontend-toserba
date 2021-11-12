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
        case 'GET-ALL-PRODUCT-USER':
            return{
                ...state,
                productUser: action.payload
            }
        case 'GET-DISKUSI':{
            
            return{
                ...state,
                getDiskusi: action.payload,
                // adaDiskusi: true
            }
        }
        // case 'POST-DISKUSI':
        //     return{
        //         ...state,
        //         diskusi:
        //     }
    }
    return state;
}

export default productReducer
