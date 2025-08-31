import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Landing from '../Pages/Landing/Landing';
import Auth from '../Pages/Auth/Auth';
import { KeyMapper } from '../KeyMapper/KeyMapper';
import ProtectedRoute from './ProtectedRoute';
import Error from '../Pages/Error/Error';
import Pricing from '../Pages/Pricing/Pricing';
import Layout from '../Utils/Layout/Layout';

const Router = () => {

  const routeConfig = createBrowserRouter([

    {
      element: <Layout />,
      // path : KeyMapper.Pages.Landing,
      children: [
        {
          path: KeyMapper.Pages.Dashboard,
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          )
        },
        {
          path: KeyMapper.Pages.Landing,
          element: <Landing />
        },
        {
          path: KeyMapper.Pages.Auth,
          element: <Auth />
        },
        {
          path: KeyMapper.Pages.Error,
          element: <Error />
        },
        {
          path: KeyMapper.Pages.Pricing,
          element: <Pricing />
        }
      ]
    }

  ])

  return <RouterProvider router={routeConfig} />
}

export default Router