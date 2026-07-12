import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import AppMovies from '../pages/AppMovies'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import SingleMovie from '../pages/SingleMovie'

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
