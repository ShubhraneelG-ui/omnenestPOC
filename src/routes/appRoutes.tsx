import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const AboutUs = lazy(() => import('views/AboutUs/AboutUs'));

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AboutUs />,
  }
]);

export default appRoutes;
