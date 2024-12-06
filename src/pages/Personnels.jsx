import React from 'react'
import Sidebar from '../components/Sidebar'
import PersonnelList from '../components/PersonnelList'

const Personnels = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar/>
      <div className='flex-1 ml-5 w-[97%] mt-4'>
        <PersonnelList/>
      </div>
    </div>
  )
}

export default Personnels