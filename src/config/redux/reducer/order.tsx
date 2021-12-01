// import { getAllOrderan } from "../../action/orderApi"
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
    adaOrder: false,
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
            }
        }
        case 'ORDERS':{
            state.order.push(state.satuan)
            return {
                ...state,
                adaOrder:true
            }
        }
        case 'DELETE-ORDERS':{
            let hapusOrder = state.order.filter((hapus: any)=>{
                return hapus._id !== action.payload._id
            } )
            console.log('dlelse', state.order.length)
            if (state.order.length === 1) {
                return {
                    ...state,
                    order: hapusOrder,
                    adaOrder:false
                }
            }
            return{
                ...state,
                order: hapusOrder
            }
        }
        case 'BAYAR':
            return{
                ...state,
                order: [],
                adaOrder:false
            }
        case 'ORDERAN':{
            return{
                ...state,
                orderan: action.payload
            }
        }
        case 'ORDERAN-KIRIM':{
            const cari: any = state.orderan.find((e: any)=> e._id === action.payload._id);
            cari.dikirim= true
            let baru = state.orderan.filter((hapus: any)=>{
                return hapus._id !== action.payload._id
            } )
            baru.push(cari)
            console.log('isi cari diOrderan', cari, baru )
            return{
                ...state,
                orderan: baru
            }
        }
        case 'PESENAN':{
            return{
                ...state,
                pesenan: action.payload
            }
        }
        case 'PESESNAN-KIRIM':{
            const cariPesenan: any = state.pesenan.find((e: any)=> e._id === action.payload._id);
            cariPesenan.sampai= true
            let baruPesenan = state.pesenan.filter((hapus: any)=>{
                return hapus._id !== action.payload._id
            } )
            baruPesenan.push(cariPesenan)
            console.log('isi cari diOrderan', cariPesenan, baruPesenan )
            return{
                ...state,
                pesenan: baruPesenan
            }
        }
    }
    return state
}

export default orderReduser