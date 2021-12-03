// import { useCallback } from "react";
import axios from "axios"

export const setDataProduct = (page: any) => (dispatch: any) => {
    axios.get(`http://localhost:4000/api/product/posts?page=${page}&perPage=14`)
        .then(result => {
            const responApi = result.data;
            // console.log('isi result api', responApi.current_page, result)
            dispatch({ type: 'GET-ALL-DATA-PRODUCT', payload: responApi.data })
            dispatch({
                type: 'UPDATE_PAGE',
                payload: {
                    currentPage: responApi.current_page,
                    totalPage: Math.ceil(responApi.total_Data / responApi.per_page)
                }
            })
        })
        .catch(err => {
            console.log('isi err', err)
        })
};

// export const setDataProduct= useCallback(
//     (page: any) => (dispatch: any) => {
//         axios.get(`http://localhost:4000/api/product/posts?page=${page}&perPage=14`)
//         .then(result => {
//             const responApi = result.data;
//             // console.log('isi result api', responApi.current_page, result)
//             dispatch({ type: 'GET-ALL-DATA-PRODUCT', payload: responApi.data })
//             dispatch({
//                 type: 'UPDATE_PAGE',
//                 payload: {
//                     currentPage: responApi.current_page,
//                     totalPage: Math.ceil(responApi.total_Data / responApi.per_page)
//                 }
//             })
//         })
//         .catch(err => {
//             console.log('isi err', err)
//         })
//     },
//     [],
// )