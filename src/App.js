import logo from './logo.svg'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import WatchPage from './pages/WatchPage/WatchPage'
import DetailsPage from './pages/Details/DetailsPage'
import SearchPage from './pages/SearchPage/SearchPage'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/movies' element={<HomePage type="movies" />} />
          <Route exact path='/series' element={<HomePage type="series" />} />
          <Route exact path='/watch/:_id' element={<WatchPage />} />
          <Route exact path='/details/:_id' element={<DetailsPage />} />
          <Route exact path='/search' element={<SearchPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
