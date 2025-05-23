import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Feedback from './Pages/Feedback'
import RequestService from './Pages/RequestService'
import Contacts from './Pages/Contact'

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
