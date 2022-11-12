import React from 'react'
import StudioHeader from '../../components/Header/StudioHeader'
import StudioSidebar from '../../components/Sidebar/StudioSidebar'

import './Studio.scss'

const Studio = () => {
  return (
    <div className='studio_containers'>
      <div className='studio_headers_container'>
        <StudioHeader />
      </div>
      <div className='studio_contents_container'>
        <div className='studio_sidebars_container'>
          <StudioSidebar />
        </div>
      </div>
    </div>
  )
}

export default Studio