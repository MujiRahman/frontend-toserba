export interface getAllData {
    allDataProduct: string[],
    page:{currentPage: number | string, totalPage: number | string},
    
}

export interface getUser{
    form:{
        email: string,
        password: string | number,
    },
    auth:{
        token: string,
        image: string | undefined,
        user: string,
        email: string,
        password: string,
        rePassword: string,
        noHp: number | undefined,
        asalKota: string,
        alamat: string | undefined,
        productId: string[] | undefined,
        orderId: string[] | undefined,
        pesenanId: string[] | undefined,
        id: string
    },
    imagePrev: null,
    isAuthenticated: boolean,
    registerUser:{
        nama: string,
        email: string,
        password: string,
        rePassword:string
    }
}

export interface product{
    createProduct:{
        nama: string,
        harga: number,
        jumlahBarang: number,
        deskripsi: string,
        image: string[],
    },
    productUser: string[],
    getDiskusi: string[],
    // adaDiskusi: boolean
}

export interface order{
    order: string[] | any,
    satuan:{
        _id: string,
        namaBarang: string,
        jumlahBarangOrder: number,
        alamatId: string,
        note: string,
        harga: number,
        totalHargaOrder: number,
        image: string,
        stock:number
    },
    orderan: string[],
    pesenan: string[]
}