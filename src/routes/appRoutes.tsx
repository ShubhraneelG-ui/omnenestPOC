import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const AboutUs = lazy(() => import('views/AboutUs/AboutUs'));
const Graphs = lazy(() => import('components/BarGraph/Graphs'));

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AboutUs />,
  },
  {
    path: '/graphs',
    element: <Graphs />,
  },
]);

export default appRoutes;
