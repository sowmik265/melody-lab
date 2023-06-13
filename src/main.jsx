import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './Utilitites/ErrorPage.jsx';
import SignIn from './SignIn&SignUp/SignIn.jsx';
import SignUp from './SignIn&SignUp/SignUp.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Home from './Home Page/Home.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Instructors from './Pages/Instructors.jsx';
import Classes from './Pages/Classes.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import UserHome from './Dashboard/UserHome.jsx';
import AdminHome from './Dashboard/AdminHome.jsx';
import ManageUsers from './Dashboard/ManageUsers.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: 'signin',
        element: <SignIn></SignIn>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      //admin routes
      {
        path: 'adminhome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'manageusers',
        element: <ManageUsers></ManageUsers>
      },
      //student routes
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
  ,
)
