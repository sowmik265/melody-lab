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
import SelectedClasses from './Dashboard/SelectedClasses.jsx';
import AdminRoute from './routes/AdminRoute.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Payment from './Dashboard/Payment.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ManageClasses from './Dashboard/ManageClasses.jsx';
import InstructorHome from './Dashboard/InstructorHome.jsx';
import Enrolled from './Dashboard/Enrolled.jsx';
import History from './Dashboard/History.jsx';
import AddClass from './Dashboard/AddClass.jsx';
import Myclass from './Dashboard/Myclass.jsx';


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><Classes></Classes></PrivateRoute>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      //admin routes
      {
        path: 'adminhome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'manageusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'manageclasses',
        element: <ManageClasses></ManageClasses>
      },
      //instructor routes
      {
        path: 'instructorhome',
        element: <InstructorHome></InstructorHome>
      },
      {
        path: 'myclass',
        element: <Myclass></Myclass>
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      //student routes
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'selectedclasses',
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: 'enrolledclass',
        element: <Enrolled></Enrolled>
      },
      {
        path: 'paymenthistory',
        element: <History></History>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
  ,
)
