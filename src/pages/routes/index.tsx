import { Navigate, Route, Routes } from "react-router-dom";
import { GO_TO } from "../../model/Routes";
import Home from '../../pages/home';
import Task from '../../pages/Task';
import ErrorPage  from "../../pages/Error";
import About from "../../pages/about";
import Dashboard from "../dashboard";
import Contact from "../Contact";
import ShowTask from "../ShowTask";
import Logout from "../../components/Logout";
import ProtecterRouter from "../../components/ProtectedRouter/inde";

function RouteApp() {
  return (
    <Routes>
    <Route path={GO_TO.ROOT} element={<Home />}/> 
    <Route path={GO_TO.HOME} element={<Home />}/>
    <Route element={<ProtecterRouter />}>
      <Route path={GO_TO.TASK} element={<Task />}/>
      <Route path={GO_TO.SHOWTASK} element={<ShowTask/>} /> 
    </Route>
    <Route path={GO_TO.ABOUT} element={<About />}>
      <Route path="logout" element={<Logout url={GO_TO.HOME}/>}/>
    </Route> 
    <Route path={GO_TO.CONTACT} element={<Contact />}/> 
    <Route path={`contactos`} element={<Navigate to={`${GO_TO.CONTACT}`} />}/> //redirect to url
    <Route path={GO_TO.DASHBOARD} element={<Dashboard />}/> 
    <Route path={GO_TO.ERROR} element={<ErrorPage />}/> 
  </Routes>
  )
}

export default RouteApp