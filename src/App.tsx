import './App.css'
import { Home } from './pages/Home'
import { Nav } from './pages/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PageNotFound } from './pages/PageNotFound'

function App() {



  return (
    <div id='App.tsx' className="min-h-screen flex flex-col align-top justify-start p-1 sm:px-20 md:px-40 overflow-scroll bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </Router>
  </div>
  )
}

export default App
