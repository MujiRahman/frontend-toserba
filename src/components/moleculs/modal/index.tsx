import axios from "axios";
import { Dispatch, FC, SetStateAction } from "react";
import { useDispatch } from "react-redux";

interface Props {
  setOpenModal: Dispatch<SetStateAction<boolean>>,
  _id: string
}

const Modal: FC<Props> =({ setOpenModal, _id }) => {
  const dispatch = useDispatch()
    return (
      <div className="fixed inset-x-2/4 -ml-40 ">
        <div className="w-80 h-64 relative rounded-lg shadow-xl bg-white p-6">
          <div className="absolute -top-1 -right-1 font-extrabold text-2xl">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="mb-2">
            <h1>Yakin mau hapus product ini ?</h1>
          </div>
          <div className="flex justify-center itmes-center text-center text-2xl">
            <p>Peringatan ini akan menghapus product ini secara permanen!</p>
          </div>
          <div className="flex justify-between mt-5 itmes-center ">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="bg-gray-400 p-2 w-20 rounded-lg"
            >
              Batal
            </button>
            <button 
              onClick={() => {
                axios.delete(`http://localhost:4000/api/product/post/${_id}` , {
                    headers:{
                        'auth-token' :  localStorage.getItem('token')
                    }
                }).then(res => {
                    console.log('hapus success', res);
                    dispatch({
                        type: 'HAPUS-PRODUCT',
                        payload:{_id}
                    })
                    setOpenModal(false);
                }).catch(err => {
                    console.log('hapus gagal total');
                })
            }} className="bg-red-400 p-2 w-20 rounded-lg" >Hapus</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
