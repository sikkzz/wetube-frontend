import React from 'react'
import StudioHeader from '../../components/Header/StudioHeader'
import StudioSidebar from '../../components/Sidebar/StudioSidebar'
import StudioMain from '../../components/StudioMain/StudioMain'


const StudioPage = () => {
  return (
    <>
      <StudioHeader/>
      <StudioSidebar />
      <StudioMain />
    </>
  )
}

export default StudioPage