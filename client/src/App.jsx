import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EventPage from './pages/EventPage'
import EventDetails from './pages/EventDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EventPage/>}/>
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
