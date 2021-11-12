import { order } from "../../models/model"

const initialStateOrder: order = {
    satuan:{
        _id: '',
        namaBarang: '',
        jumlahBarangOrder: 1,
        alamatId: '',
        note: '',
        harga: 0,
        totalHargaOrder: 0,
        image:'',
        stock: 0
    },
    order: [],
    orderan:[],
    pesenan:[]
}

const orderReduser = (state = initialStateOrder, action: any) => {
    switch (action.type) {
        case 'ORDER':{
            return{
                ...state,
                satuan:{
                    ...state.satuan,
                    [action.satuanType] : action.satuanValue
                },
                // oreder: action.payload
                // [action.orderType] : action.orderValue
            }
        }
        case 'ORDERS':{
            state.order.push(state.satuan)
            return state
        }
        case 'ORDERAN':{
            return{
                ...state,
                orderan: action.payload
            }
        }
        case 'PESENAN':{
            return{
                ...state,
                pesenan: action.payload
            }
        }
    }
    return state
}

export default orderReduser