import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import axios from 'axios'
import './Featured.scss'
import { AuthContext } from '../../auth/authContext';

function Featured ({type}) {
  const [randomContent, setRandomContent] = useState({})
 const navigate = useNavigate()
 const {user} = useContext(AuthContext);

  useEffect(()=>{
    const getRandomContent = async ()=>{
        try{
            let path = "contents/random";
            let pathtype = type?`?type=${type}`:"";
            const response = await axios.get(path+pathtype,{headers:{"authorization": `Bearer ${user.token}`}})
           
            if(response){
              console.log(response.data);
                setRandomContent(response.data);
            }
        }catch(err){
            console.log(err);
        }
    }

    getRandomContent();

    const interval = setInterval(()=>{
        getRandomContent();
    },4000)

    return ()=>{
        clearInterval(interval);
    }
  },[type])

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
        </div>
      )}
      <img src={randomContent.img} alt={randomContent.title} />
      <div className='info'>
        <img src={randomContent.imgTitle} alt={randomContent.title} />
        <span className='desc'>{randomContent.description}</span>
        <div className='buttons'>
          <button
            className='play'
            onClick={() => {navigate(`/watch/${randomContent._id}`)
             console.log(randomContent._id);}}

          >
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button
            className='more'
            onClick={() => navigate(`/details/${randomContent._id}`)}
          >
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
