import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const ImageDisplay = ({ openModal, setOpenModal, image }) => {

    const [isClosing,setIsClosing] = useState(false)

    const closeModal = () => {
        setIsClosing(true)
        setTimeout(() => {
          setIsClosing(false)
          setOpenModal(false)
        }, 200)
      };


  return (
    <AnimatePresence>
      {openModal && !isClosing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/40"
        >
          <motion.div
            initial={{ y: 70 , opacity: 0}}
            animate={{ y: 0, opacity: 1}} 
            exit={{ y: 70 , opacity: 0 }} 
            transition={{ duration: 0.2 }} 
            className='flex flex-row'
          >
           <img src={image} alt="userImage here" className='w-[350px] h-[350px] rounded-full'/>
           <X color="white" style={{cursor:"pointer"}} onClick={()=>closeModal()}/>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageDisplay;
