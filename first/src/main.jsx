import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Contact from './components/Contact.jsx'
import Body from './components/Body.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Body/>
    },
    {
  path:'/about',
  element: <About/>
},{
  path:'/contact',
  element:<Contact/>
}
  ],
  errorElement:<Error/>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
