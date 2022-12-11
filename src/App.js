import React from 'react';

// import components

import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes';

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
