import { getAllData } from "../../models/model"

const initialStateHome: getAllData = {
    allDataProduct:[],
    page: {
        currentPage: '',
        totalPage: ''
    }
    // createProduct:{
    //     nama: '',
    //     harga: 0,
    //     jumlahBarang: 0,
    //     deskripsi: '',
    //     images: []
    // },
    // imagePrevs: []
}

const homeReducer = (state = initialStateHome, action: any) => {
    switch (action.type) {
        case 'GET-ALL-DATA-PRODUCT':
            return {
                ...state,
                allDataProduct: action.payload
            }
        case 'UPDATE_PAGE':
            return {
                ...state,
                page: action.payload
            }
        // case 'CREATE-PRODUCT':
        //     return{
        //         ...state,
        //         createProduct:{
        //             [action.createProductType] : action.createProductValue
        //         }
        //     }
        // case 'IMAGE-PREVS':
        //     return{
        //         ...state,
        //         imagePrevs: action.payload
        //     }
        }
    return state;
}

export default homeReducer
// const initialStateHome: getAllData = {
//     allDataProduct:[],
//     page: {
//         currentPage: '',
//         totalPage: ''
//     },
//     createProduct:{
//         nama: '',
//         harga: 0,
//         jumlahBarang: 0,
//         deskripsi: '',
//         images: [],
//     },
//     imagePrevs: []
// }

// const homeReducer = (state = initialStateHome, action: any) => {
//     if(action.type === 'GET-ALL-DATA-PRODUCT'){
//         return {
//             ...state,
//             allDataProduct: action.payload
//         }
//     }
//     if(action.type === 'UPDATE_PAGE') {
//         return {
//             ...state,
//             page: action.payload
//         }
//     }
//     if(action.type === 'CREATE-PRODUCT'){
//         return{
//             ...state,
//             createProduct:{
//                 [action.createProductType] : action.createProductValue
//             }
//         }
//     }
//     return state;
// }

// export default homeReducer