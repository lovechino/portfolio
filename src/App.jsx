import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import FormBuid from './UI/FormBuid'
import PortFolio from './UI/PortFolio'

const browerRouter = createBrowserRouter([
  {
    path : '/',
    element :  <FormBuid />
  },
  {
    path :'/portfolio',
    element : <PortFolio/>
  }
])

function App() {

  return (
    <RouterProvider router={browerRouter}/>
  )
}

export default App
