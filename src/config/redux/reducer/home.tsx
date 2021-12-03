import { getAllData } from "../../models/model"

const initialStateHome: getAllData = {
    allDataProduct:[],
    page: {
        currentPage: '',
        totalPage: ''
    }
    
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
        }
    return state;
}

export default homeReducer