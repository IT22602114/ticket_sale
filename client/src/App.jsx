import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EventPage from './pages/EventPage'
import EventDetails from './pages/EventDetails'
import ReservationPage from './pages/ReservationPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EventPage/>}/>
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path='/reservation/:id' element={<ReservationPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
