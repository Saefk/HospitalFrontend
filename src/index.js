import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home'
import Doctors from './components/Doctors'
import Doctor from './components/Doctor'
import Patients from './components/Patients'
import Wards from './components/Wards'
import Cases from './components/Cases'
import Analytics from './components/Analytics';
import Login from './components/Login'


// router is passed down as router provider
// it also has the default element as app
// in App, there is an Outlet to which Home is defaulted
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement : <ErrorPage></ErrorPage>,
    children :[
      {index:true, element:<Home />},
      {
        path:"/doctors",
        element:<Doctors />
      },
      {
        path:"/doctors/:id",
        element:<Doctor />
      },
      {
        path:"/patients",
        element:<Patients />
      },
      {
        path:"/wards",
        element:<Wards />
      },
      {
        path:"/staff/cases",
        element:<Cases />
      },
      {
        path:"/staff/analytics",
        element:<Analytics />
      },
      {
        path:"/login",
        element:<Login />
      },


    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
