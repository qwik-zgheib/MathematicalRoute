import { createBrowserRouter } from 'react-router-dom'

import { Limits } from '../components/Limits'
import { Derivadas } from '../components/Derivadas'
import Menu from '../components/Menu'
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
    children: [
      {
        path: '',
        element: <App />,
        children: [
          {
            path: 'limits',
            element: <Limits />,
          },
          {
            path: 'derivadas',
            element: <Derivadas />,
          },
        ],
      },
    ],
  },
])

export default router
