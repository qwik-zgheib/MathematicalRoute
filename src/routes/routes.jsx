import { createBrowserRouter } from 'react-router-dom'
import { Limits } from '../components/Limits'
import { Derivadas } from '../components/Derivadas'
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children: [
    //   {
    //     path: 'contact',
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: 'limites',
    element: <Limits />,
  },
  {
    path: 'derivadas',
    element: <Derivadas />,
  },
])

export default router
