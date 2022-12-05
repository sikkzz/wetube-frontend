import React from 'react'
import Video from '../../assets/videos/test1.mp4'
import './Detail.scss'

const Detail = () => {
  return (
    <>
    <div className="detail_containers">
        <div className="detail_contents_container">
          <div className="test">
            <video
              src={Video}
              autoPlay
              loop
              controls
              muted
              type="video/mp4"
              className="test_video"
            />
          </div>
        </div>
        <div className='detail_playlist_container'>
            
        </div>
      </div>
    </>
  )
}

export default Detail