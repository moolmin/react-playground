import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/App.scss'
import Layout from './components/layout'
import SCSS from './routes/scss_practice'
import MSW from './routes/msw_pratice'
import Infinite from '@routes/inter_observer_practice'
import Zustand from '@routes/zudtand_practice'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "scss",
        element: <SCSS />
      },
      {
        path: "msw",
        element: <MSW />
      },
      {
        path: "infinite",
        element: <Infinite />
      },
      {
        // path: "redux",
        // element: <Redux />
      },
      {
        path: "zustand",
        element: <Zustand />
      }
    ]
  }
])

function App() {
  return (<>
  <RouterProvider router={router} />
  </>
  )
}

export default App
