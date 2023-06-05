import React, { useContext, useEffect, useReducer } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/Featured/Featured'
import { AuthContext } from '../../auth/authContext'
import { useNavigate } from 'react-router-dom'
import { reducerHomePage, initialHomePageReducer } from '../../reducerHomePAge'
import axios from 'axios'
import Loaging from '../../components/Loading/Loaging'
import Error from '../../components/Error/Error'
import List from '../../components/List/List'
import "./HomePage.scss"


function HomePage ({ type }) {
  const [{ loading, error, lists }, dispatch] = useReducer(
    reducerHomePage,
    initialHomePageReducer
  )
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    async function GetRandomList () {
      dispatch({ type: 'GET_REQUEST' })
      try {
        const results = await axios.get(`lists?type=${type ? type : ''}`, {
          //`/lists/${type ? '?type=' + type : ''}`
          headers: { authorization: `Bearer ${user.token}` }
        })
        dispatch({
          type: 'GET_SUCCESS',
          payload: results.data.sort(
            () => Math.random() - 0.5 // Making array random
          )
        })
      } catch (error) {
        dispatch({ type: 'GET_FAIL', payload: error.message })
      }
    }

    GetRandomList()
    console.log(lists)
  }, [type])

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/')
    }
  }, [user, navigate])
  return (
    <div className='home'>
      <Navbar></Navbar>
      <Featured type={type}></Featured>
      {loading ? (
        <Loaging></Loaging>
      ) : error ? (
        <Error error={error}></Error>
      ) : (
        lists.map((item, i) => <List className="list" key={i} list={item}></List>)
      )}
    </div>
  )
}

export default HomePage
