import React from 'react'
import Header from '../components/Headers/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import ChannelContent from '../components/ChannelContent/ChannelContent'

const Channel = () => {
  return (
    <div className='container'>
        <Header />
        <Sidebar />
        <ChannelContent />
    </div>
  )
}

export default Channel