import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './page/app.jsx'
import Projects from './page/projects.jsx'
import './index.css'
import Belajarapi2 from './page/belajarapi2.jsx'
import NotFound from './page/notfound.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App /> } />
        <Route path='/projects' element={<Projects /> } />
        <Route path='/notfound' element={<NotFound /> } />
        <Route path='/testapi' element={<Belajarapi2 /> } />
      </Routes>
    </Router>
  </StrictMode>,
)
