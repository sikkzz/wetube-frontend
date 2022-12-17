import React from 'react'
import './AdNotice.scss'

const AdNotice = ({adtime}) => {
  return (
    <div className='adnotice_container'>
        <p>{adtime}초 후에 광고가 재생됩니다.</p>
    </div>
  )
}

export default AdNotice