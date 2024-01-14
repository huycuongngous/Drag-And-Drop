import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/admin'
import Consumer from './pages/Consumer'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/consumer' element={<Consumer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
