import axios from "axios"

export const setDataProduct = (page: any) => (dispatch: any) => {
    axios.get(`${process.env.REACT_APP_URL}/api/product/posts?page=${page}&perPage=16`)
        .then(result => {
            const responApi = result.data;
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
