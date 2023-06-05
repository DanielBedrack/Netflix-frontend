import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import './ListItem.scss'

function ListItem ({ item }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link to={{ pathname: `/details/${item._id}` }} className='link'>
      <div
        className='listItem'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={item?.imgThumb} alt='' />
        {isHovered && (
          <>
            <ReactPlayer
              className='video'
              height={145}
              width={300}
              url={item.trailer}
              playing={true}
            ></ReactPlayer>
            <div className='itemInfo'>
              <div className='icons'>
                
                  <Link to={`watch/${item._id}`}><PlayArrowIcon className='icon link' /></Link>

                <AddIcon className='icon' />
                <ThumbUpOutlinedIcon className='icon' />
                <ThumbDownOffAltOutlinedIcon className='icon' />
              </div>
              <div className='itemInfoTop'>
                <span>{item.duration}</span>
                <span className='limit'>+{item.limit}</span>
                <span>{item.year}</span>
              </div>
              <div className='desc'>{item.desc}</div>
              <div className='genre'>{item.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default ListItem
