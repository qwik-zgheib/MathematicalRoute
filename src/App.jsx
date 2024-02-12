import { RouterProvider } from 'react-router-dom'

import Landing from './pages/Landing'
import router from './router/router'

const App = () => {
  return (
    <RouterProvider router={router}>
      <Landing />
    </RouterProvider>
  )
}

export default App
