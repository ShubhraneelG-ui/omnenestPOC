import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainerWrapper } from 'components/ToastMessage/ToastMessage';
import appRoutes from 'routes/appRoutes';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div style={{ padding: '1.5rem' }}>loading...</div>}>
      <ToastContainerWrapper />
      <RouterProvider router={appRoutes} />
    </Suspense>
  );
};

export default App;
