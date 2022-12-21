import { Navigate, Route, Routes } from "react-router-dom";
import { GO_TO } from "../../model/Routes";
/* import Home from '../../pages/home';
import Task from '../../pages/Task';
import ErrorPage  from "../../pages/Error";
import About from "../../pages/about";
import Dashboard from "../dashboard";
import Contact from "../Contact";
import ShowTask from "../ShowTask";
import ProtecterRouter from "../../components/ProtectedRouter";
import Who from "../who";
import Login from "../login";
import Admin from "../Admin";
import WebChat from "../webChat"; */
import { useAppSelector } from "../../hook/hooks";
import { getUser } from "app/redux/features/user/userSlice";
import React from 'react';

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

function RouteApp() {
  const user = useAppSelector(getUser);
  
  return (
    <Routes>
    <Route path={GO_TO.ROOT} element={<Login />}/> 
    <Route element={<ProtecterRouter isAllowed={user.name !== ''} url={GO_TO.ROOT} />}>
      <Route path={GO_TO.HOME} element={<Home />}/>
      <Route path={GO_TO.TASK} element={<Task />}/>
      <Route path={GO_TO.SHOWTASK} element={<ShowTask/>} /> 
      <Route path={GO_TO.CHAT} element={<WebChat/>} /> 
    </Route>
    <Route path={GO_TO.ABOUT} element={<About />}>
      <Route element={<ProtecterRouter isAllowed={user.name !== ''} url={GO_TO.ABOUT}/>}>
        <Route path={GO_TO.WHO} element={<Who/>}/>
      </Route>
    </Route> 
    <Route path={GO_TO.CONTACT} element={<Contact />}/> 
    <Route path={`contactos`} element={<Navigate to={`${GO_TO.CONTACT}`} />}/> //redirect to url
    <Route path={GO_TO.DASHBOARD} element={
        <ProtecterRouter 
              isAllowed={user.name !== '' && (user.permission.includes('analize' as never) || user.rol.includes('admin' as never))} 
              url={GO_TO.HOME}
        >
              <Dashboard />
        </ProtecterRouter>
        }/> 
    <Route path={GO_TO.ADMIN} element={
      <ProtecterRouter 
                    isAllowed={user.name !== '' && user.rol.includes('admin' as never)} 
                    url={GO_TO.HOME}
      >
        <Admin />
      </ProtecterRouter>
    } />
    <Route path={GO_TO.ERROR} element={<ErrorPage />}/> 
  </Routes>
  )
}

export default RouteApp