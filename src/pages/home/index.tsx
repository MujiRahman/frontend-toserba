import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BlogItem } from '../../components/moleculs/blogItem';
import { setDataProduct } from '../../config/action/homeApi';
import { RootStore } from '../../config/redux';
// import { getAllData } from '../../config/models/home';

interface Props{

}

const Home: React.FC<Props> = () => {
    const [counter, setCounter] = React.useState(1);
    
    const { allDataProduct, page } = useSelector((state: RootStore) => state.homeReducer);
    const dispatch = useDispatch()
    useEffect(() => {
        if(counter > 0) {
            dispatch(setDataProduct(counter));
        }
    }, [counter, dispatch])
    console.log('isi global satate',page)

    const previous = () =>{
        setCounter(counter <= 1 ? 1 : counter - 1)
        // console.log(counter)
    }

    const next = () =>{
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
        // console.log(counter)
    }

    return (
        <div className="flex flex-wrap gap-4 ml-14 mt-2">
            {
                allDataProduct.map((result: any) => {
                    return (<BlogItem
                        key = {result._id}
                        imge ={`http://localhost:4000/${result.imageId[0].imageUrl}`}
                        judul = {result.nama}
                        harga = {result.harga}
                        asalKota = {result.merek}
                        rating = {result.rating}
                        terjual = {result.terjual}
                        _id = {result._id}
                        />)
                })
            }
            
            <div className="pagination">
                <button onClick={previous}>Previous</button>
                <p className="text-page">{page.currentPage}/{page.totalPage}</p>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default Home;