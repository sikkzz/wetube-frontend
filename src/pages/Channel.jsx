import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import ChannelContent from '../components/ChannelContent/ChannelContent'

const Channel = () => {
  return (
    <>
      <div className="container">
        <div className="headers_container">
          <Header />
        </div>
        <div className="contents_container">
          <div className="sidebar_container">
            <Sidebar />
          </div>
          <div className="mains_container">
            <div className="detail_container">
              <ChannelContent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Channel