import React, { memo, useCallback, useEffect, useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  BlogItem  from '../../components/moleculs/blogItem';
import { setDataProduct } from '../../config/action/homeApi';
import { RootStore } from '../../config/redux';

const Home = () => {
    console.log('1. awal render start home')
    const [counter, setCounter] = React.useState(1);
    const { allDataProduct, page } = useSelector((state: RootStore) => state.homeReducer);
    const dispatch = useDispatch()
    const panggil = useCallback(
        () => {
            dispatch(setDataProduct(counter))
        },
        [counter, dispatch],
    )
    console.log('2. pemangilan state redux')
    useEffect(() => {
        if(counter > 0) {
            // dispatch(setDataProduct(counter));
            panggil()
        }
    }, [counter, dispatch, panggil])
    console.log('3. pemangilan api')
    
    const previous = () =>{
        setCounter(counter <= 1 ? 1 : counter - 1)
    }
    
    const next = () =>{
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
    }

    const hasil=  useMemo(() => allDataProduct, [allDataProduct])
    
    console.log("4. finis")
    return (
        <>
            <div className="flex flex-wrap gap-4 ml-14 mt-2">
                {
                    hasil.map((result: any) => {
                        return (<BlogItem
                            key = {result._id}
                            imge ={`http://localhost:4000/${result.imageId[0].imageUrl}`}
                            judul = {result.nama}
                            harga = {result.harga}
                            asalKota = {result.asalKota}
                            rating = {result.rating}
                            terjual = {result.terjual}
                            _id = {result._id}
                        />)
                    })
                }
            </div>
            <div className="flex my-6 justify-center">
                <button className='rounded-lg py-3 px-6 bg-red-300' onClick={previous}>Previous</button>
                <p className=" py-3 px-6">{page.currentPage}/{page.totalPage}</p>
                <button className='rounded-lg py-3 px-6 bg-red-300' onClick={next}>Next</button>
            </div>
        </>
    );
}

export default memo(Home);