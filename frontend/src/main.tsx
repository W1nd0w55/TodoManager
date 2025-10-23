import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/Index.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';

const router = createBrowserRouter([
	{ path: '/', element: <Index /> },
	{ path: '/login', element: <Login /> },
	{ path: '/signup', element: <Signup /> }
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
    	<RouterProvider router={router} />
	</StrictMode>
);