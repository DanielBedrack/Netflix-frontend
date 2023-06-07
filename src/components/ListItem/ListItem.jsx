import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import './ListItem.scss'
import { AuthContext } from '../../auth/authContext'
import { UPDATE_USER } from '../../auth/authAction'
import axios from 'axios'

function ListItem ({ item }) {
  const [isHovered, setIsHovered] = useState(false)

  const {user,dispatch} = useContext(AuthContext)
  
  const AddItemHandler = async() => {

    try {
      dispatch({
        type: UPDATE_USER,
        payload: item._id
      });
      console.log(user.myList)

     const res = await axios.post("user/",{...user},{
      headers: { authorization: `Bearer ${user.token}` }
    })
     console.log(res.data);
      // Update the list state with the new item
      //setMyList(prevList => [...prevList, newItem]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  }

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
                <AddIcon className='icon' onClick={AddItemHandler} value={item._id}/>
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
