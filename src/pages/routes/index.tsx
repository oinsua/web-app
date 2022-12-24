import {  Navigate } from "react-router-dom";
import { GO_TO } from "../../model/Routes";
import React from 'react';
import { AllowedValue } from "components/ProtectedRouter";

const Home = React.lazy(() => import('pages/home'));
const Task = React.lazy(() => import('pages/Task'));
const ErrorPage = React.lazy(() => import('pages/Error'));
const About = React.lazy(() => import('pages/about'));
const Dashboard = React.lazy(() => import('pages/dashboard'));
const Contact = React.lazy(() => import('pages/Contact'));
const ShowTask = React.lazy(() => import('pages/ShowTask'));
const Who = React.lazy(() => import('pages/who'));
const Login = React.lazy(() => import('pages/login'));
const Admin = React.lazy(() => import('pages/Admin'));
const WebChat = React.lazy(() => import('pages/webChat'));
const ProtecterRouter = React.lazy(() => import('components/ProtectedRouter'));
const ShowLoginLogout = React.lazy(() => import('components/ShowLoginLogout'));

export const routes = [
  {//Root
    path: GO_TO.ROOT,
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {//Root
    path: GO_TO.ROOT,
    element: <ShowLoginLogout/>,
    errorElement: <ErrorPage/>
  },
  {//Protected routes
    path: GO_TO.ROOT,
    element: <ProtecterRouter isAllowed={AllowedValue.All} url={GO_TO.ROOT} />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: GO_TO.HOME,
        element: <Home />,
        errorElement: <ErrorPage/>
      },
      {
        path: GO_TO.TASK,
        element: <Task />,
        errorElement: <ErrorPage/>
      },
      {
        path: GO_TO.SHOWTASK,
        element: <ShowTask />,
        errorElement: <ErrorPage/>
      },
      {
        path: GO_TO.CHAT,
        element: <WebChat />,
        errorElement: <ErrorPage/>
      },
    ],
  },
  {//Protected routes About
    path: GO_TO.ABOUT,
    element: <About/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: GO_TO.P_WHO,
        element: <ProtecterRouter isAllowed={AllowedValue.All} url={GO_TO.ABOUT}/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: GO_TO.WHO,
            element: <Who/>,
            errorElement: <ErrorPage/>
          }
        ],
      },
    ],
  },
  {//Chat
    path: GO_TO.CHAT,
    element: <WebChat/>,
    errorElement: <ErrorPage/>
  },
  {//Contact
    path: GO_TO.CONTACT,
    element: <Contact/>,
    errorElement: <ErrorPage/>
  },
  {//Contact Redirect
    path: `contactos`,
    element: <Navigate to={`${GO_TO.CONTACT}`} />,
    errorElement: <ErrorPage/>
  },
  {//Protected routes, Dashboard
    path: GO_TO.ROL,
    element:  <ProtecterRouter isAllowed={AllowedValue.ANALIZE} url={GO_TO.HOME} />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: GO_TO.DASHBOARD,
        element:  <Dashboard />,
        errorElement: <ErrorPage/>,
      }
    ]
  },
  {//Protected routes, Admin
    path: GO_TO.ROL,
    element:  <ProtecterRouter isAllowed={AllowedValue.ADMIN} url={GO_TO.HOME} />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: GO_TO.ADMIN,
        element:  <Admin />,
        errorElement: <ErrorPage/>,
      }
    ]
  },
];