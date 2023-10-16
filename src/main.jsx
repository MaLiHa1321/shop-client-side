import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './component/Mainlayout.jsx';
import Addshop from './pages/Addshop.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
       {
        path: '/',
        element: <App></App>
       },
       {
        path: '/addShop',
        element: <Addshop></Addshop>
       },
       {
        path: '/login',
        element: <Login></Login>
       },
       {
        path: '/register',
        element: <Register></Register>
       }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
