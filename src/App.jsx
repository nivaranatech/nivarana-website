import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Feedback from './pages/Feedback'
import RequestService from './pages/RequestService'
import Contacts from './pages/Contact'

function App() {

  const routes = createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/request-service" element={<RequestService />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Route>
  )
  const router = createBrowserRouter(routes)
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
