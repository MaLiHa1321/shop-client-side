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
import UpdateShop from './pages/UpdateShop.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
       {
        path: '/',
        element: <App></App>,
        loader: () => fetch('http://localhost:5000/shop')
        
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
       },
       {
        path: '/updateshop/:id',
        element: <UpdateShop></UpdateShop>,
        loader: ({params})=> fetch(`http://localhost:5000/shop/${params.id}`)
       }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
