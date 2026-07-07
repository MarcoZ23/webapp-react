import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import AppMovies from '../components/AppMovies'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import SingleMovie from '../components/SingleMovie'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/movies' element={<AppMovies />} />
            <Route path='/movies/:id' element={<SingleMovie />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
