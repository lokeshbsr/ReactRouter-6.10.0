import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  errorElement,
} from 'react-router-dom';
import RootLayout from './src/layouts/RootLayout';
import Home from './pages/Home';
import Post from './pages/Post';
import Cat, { loader as catLoader } from './pages/Cat';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route
        path="/fact"
        element={<Cat />}
        loader={catLoader}
        errorElement={'Error Occured'}
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
