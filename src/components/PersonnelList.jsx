import { FileX , Eye } from "lucide-react"
import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"
import data from "../data"
import ImageDisplay from "./ImageDisplay"

const ProductList = () => {
  const navigate = useNavigate()

  const [openModal,setOpenModal] = useState(false)

  return (
    <div className='border border-slate-500 rounded-[8px] py-5 pl-5 w-[97%] h-[80vh] overflow-auto overflow-x-hidden'>
      {data.length > 0 ? (
        <div>
          <ul className="grid grid-cols-4">
            <li className="font-bold">Image</li>
            <li className="font-bold">Personnel</li>
            <li className="font-bold">Added on</li>
            <li className="font-bold">Actions</li>
          </ul>

          <div className="mt-2">
            {data.map((item,index)=>(
              <div key={index} className="grid grid-cols-4 py-2">
                <img src={item.image} className="w-[40px] bg-cover rounded-full h-[40px] 
                  mobile:w-[50px] mobile:h-[50px]" alt="product here"
                />
                <h3>{item.name}</h3>
                <h3>{item.createdAt}</h3>
                <div>
                  <Eye color="grey" style={{cursor:"pointer"}} onClick={()=>setOpenModal(true)}/>
                </div>
                {openModal && <ImageDisplay openModal={openModal} setOpenModal={setOpenModal} image={item.image}/>}
              </div>
            ))}
          </div>
        </div>
      )
      : 
      (
        <div className="flex justify-center items-center w-full h-full mobile:flex-col">
          <FileX className="w-[200px] h-[150px]" color="grey" />
          <div>
            <h1 className="font-extrabold mt-2 text-xl">Your List Is Empty</h1>
            <p className="text-gray-500">Registered personnels will show here.</p>
            <button className="bg-gradient-to-tr from-red-500 via-yellow-500 to-green-500 rounded-[4px] 
              px-4 py-2 text-white mt-2 text-sm hover:scale-105 transition-scale duration-300"
              onClick={()=>navigate('/')}
            >
              Add Personnel
            </button>
          </div>
        </div>
      )}
      <Outlet/>   
    </div>
  )
}

export default ProductList