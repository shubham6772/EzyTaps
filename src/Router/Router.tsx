import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';
import Auth from '../Pages/Auth/Auth';
import { KeyMapper } from '../KeyMapper/KeyMapper';
import ProtectedRoute from '../Guards/ProtectedRoute';
import Error from '../Pages/Error/Error';
import Pricing from '../Pages/Pricing/Pricing';
import Layout from '../Utils/Layouts/RootLayout';
import AuthGuard from '../Guards/AuthGuard';
import { DashboardRoutes } from './DashboardRouter/DashboardRouter';
import DashboardLayout from '../Utils/Layouts/DashboardLayout/DashboardLayout';

const Router = () => {

  const routeConfig = createBrowserRouter([

    {
      element:
        <AuthGuard>
          <Layout />
        </AuthGuard>,
      children: [
        {
          path: KeyMapper.Pages.Dashboard,
          element: (
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          ),
          children: DashboardRoutes
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