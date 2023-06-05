import React, { useEffect,  useState, useContext } from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { AuthContext } from '../../auth/authContext'
import { GetContent } from '../../utils'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import './DetailsPage.scss'

function DetailsPage () {
  const params = useParams()
  const { _id } = params
  const navigate = useNavigate()
  const [content, setContent] = useState()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    async function CallGetContent () {
      try {
        const response = await GetContent(_id,user.token)
        setContent(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    CallGetContent()
  }, [])

  return (
    <div className='main'>
      <Navbar />
      <div className='centered'>
        <div className='details'>
          <img
            className='picture'
            src={content ? content.imgVertical : ''}
            alt='img'
          />
          <div className='info'>
            <h1>{content ? content.title : ''}</h1>
            <p>{content ? content.description : ''}</p>
            <p>
              Type: {content ? (content.isSeries ? 'Series' : 'Movie') : ''}
            </p>
            <p>Year: {content ? content.year : ''}</p>
            <p>Duration: {content ? content.duration : ''}</p>
            <p>Age restriction: {content ? content.limit : ''}+</p>
            <p>Genre: {content ? content.genre : ''}</p>
            <div className='buttons'>
              <button
                className='play'
                onClick={() => navigate(`/watch/${content ? content._id : ''}`)}
              >
                <PlayArrowIcon />
                <span>Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
