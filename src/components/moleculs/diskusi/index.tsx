import React, {  useState } from 'react'
import { useSelector } from 'react-redux'
import { postDiskusi } from '../../../config/action/productApi';
import { RootStore } from '../../../config/redux'

interface Props{
className?: string,
_id: string,
}

const Diskusi:React.FC<Props> = ({className, _id}) => {
    const {getDiskusi} = useSelector((state: RootStore) => state.productReducer);
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    const [diskusi, setDiskusi] = useState('')
    

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    const handleKirim = () => {
        if (!isAuthenticated){
            setDiskusi('')
            alert('mohon login terlebih dahulu...!!!')
        }else{
            console.log('isi diskusi sebelum kirim', diskusi)
            postDiskusi(diskusi, _id)
            // setDiskusi('')
        }
    }
    
    console.log('isi diskusi', getDiskusi, )

    return (
        <div className={className}>
            <div  className=" w-2/5 mb-20 p-2">
                {
                    getDiskusi.map((hasil: any)=>{
                        return(<>
                                <div className="flex">
                                    <img src={`http://localhost:4000/${hasil.imageProfil}`} alt="" className='w-20 h-20' />
                                    <div>
                                        <p>{hasil.nama}</p>
                                        <p className="mb-4">{hasil.comment}</p>
                                    </div>
                                </div> 
                            </>
                        )
                    })
                }
                <div className="flex gap-2">
                    <input name="diskusi" className="border-2 border-greey w-full rounded-lg" value={diskusi} onChange={(e:any)=> setDiskusi(e.target.value)} ></input>
                    <button className="bg-blue-600 p-2 rounded-lg" onClick={handleKirim} >kirim</button>
                </div>
            </div>
        </div>
    )
}

export default Diskusi;