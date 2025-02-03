import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EventPage from './pages/EventPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EventPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
