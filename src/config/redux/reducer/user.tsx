import { getUser } from '../../models/model'

const initialStateUser: getUser ={
    form:{
        email: '',
        password:'',
    }, 
    auth:{
        user: '',
        image: '',
        email: '',
        password: '',
        rePassword: '',
        noHp: undefined,
        asalKota: '',
        alamat: '',
        productId: [],
        orderId: [],
        pesenanId: [],
        id:''
    },
    imagePrev: null,
    isAuthenticated: false,
    registerUser:{
        nama: '',
        email: '',
        password: '',
        rePassword:''
    },
    errorLogin:{
        message: '',
        errorsEmail: false,
        errorsPassord: false
    },
    lengkap:false
}

const userReducer= (state = initialStateUser, action: any) => {
    switch (action.type) {
        case 'USER-LOGIN':
            console.log('isi payload', action)
            return {
                ...state,
                form:{
                    ...state.form,
                    [action.formType]:action.formValue
                },
                auth: action.payload,
                isAuthenticated: true,
            }
        case 'USER-UPDATE':
            return{
                ...state,
                auth: action.payload,
                lengkap: true
            }
        case 'USER-LOGOUT':
            localStorage.clear()
            return {
                ...state,
                auth:{
                    ...state.auth,
                    user: null,
                },
                isAuthenticated: false,
            }
        case 'USER-REGISTER':
            console.log('isi payload', action)
            return{
                ...state,
                registerUser:{
                    ...state.registerUser,
                    [action.registerUserType]: action.registerUserValue
                }
            }
        case 'UPDATE-USER':
            console.log('isi payload', action)
            return{
                ...state,
                auth:{
                    ...state.auth,
                    [action.authType]: action.authValue
                }
            }
        case 'IMAGE-PREV' :
            console.log('isi payload', action)
            return{
                ...state,
                imagePrev:action.payload
            }
        case 'ERROR-LOGIN':
            return{
                ...state,
                errorLogin: action.payload
            }
        }
    return state
}

export default userReducer;
