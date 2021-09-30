import { getAllData } from "../../models/home"

const initialStateHome: getAllData = {
    allDataProduct:[],
    page: {
        currentPage: '',
        totalPage: ''
    }
}

const homeReducer = (state = initialStateHome, action: any) => {
    if(action.type === 'GET-ALL-DATA-PRODUCT'){
        return {
            ...state,
            allDataProduct: action.payload
        }
    }
    if(action.type === 'UPDATE_PAGE') {
        return {
            ...state,
            page: action.payload
        }
    }
    return state;
}

export default homeReducer