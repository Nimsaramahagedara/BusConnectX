import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

 import DashboardLayout from '../layouts/dashboard';
// import Page404 from '../pages/NotFound';
// import ProductsPage from '../pages/products';
// import UserPage from '../pages/user';
// import BlogPage from '../pages/blog';
// import IndexPage from '../pages/app';
// import LoginPage from '../pages/login';

export const IndexPage = lazy(() => import('../pages/app'));
export const BlogPage = lazy(() => import('../pages/blog'));
export const UserPage = lazy(() => import('../pages/user'));
export const LoginPage = lazy(() => import('../pages/login'));
export const ProductsPage = lazy(() => import('../pages/products'));
export const Page404 = lazy(() => import('../pages/NotFound'));

// ----------------------------------------------------------------------


export default function AdminRouter() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, path:'/' },
        { element: <UserPage /> , path:'user'},
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="404" replace />,
    },
  ]);

  return routes;
}
