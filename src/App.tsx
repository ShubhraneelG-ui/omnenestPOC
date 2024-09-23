import React, { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainerWrapper } from 'components/ToastMessage/ToastMessage';
import appRoutes from 'routes/appRoutes';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from 'themes/light/light';
import { darkTheme } from 'themes/dark/dark';

const App: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const theme = toggle ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <button onClick={() => setToggle((prev) => !prev)}>
        Theme: {toggle ? 'light' : 'dark'}
      </button>
      <Suspense fallback={<div style={{ padding: '1.5rem' }}>loading...</div>}>
        <ToastContainerWrapper />
        <RouterProvider router={appRoutes} />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
