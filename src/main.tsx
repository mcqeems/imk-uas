import { StrictMode } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from '@/pages/home/Home.tsx';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from '@/pages/layout/Layout';
import Profil from '@/pages/profil/Profil';
import CeritaInspirasi from '@/pages/cerita-inspirasi/CeritaInspirasi';
import Mitra from '@/pages/mitra/Mitra';
import Program from '@/pages/program/Program';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/profil',
        element: <Profil />,
      },
      {
        path: '/cerita-inspirasi',
        element: <CeritaInspirasi />,
      },
      {
        path: '/mitra',
        element: <Mitra />,
      },
      {
        path: '/program',
        element: <Program />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
