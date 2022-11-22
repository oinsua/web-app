import { Route, Routes } from "react-router-dom";
import { GO_TO } from "../../model/Routes";
import Home from '../../pages/home';
import Task from '../../pages/Task';
import ErrorPage  from "../../pages/Error";
import About from "../../pages/about";
import Dashboard from "../dashboard";
import Contact from "../Contact";

function RouteApp() {
  return (
    <Routes>
    <Route path={GO_TO.ROOT} element={<Home />}/> 
    <Route path={GO_TO.HOME} element={<Home />}/> 
    <Route path={GO_TO.TASK} element={<Task />}/> 
    <Route path={GO_TO.ABOUT} element={<About />}/> 
    <Route path={GO_TO.CONTACT} element={<Contact />}/> 
    <Route path={GO_TO.DASHBOARD} element={<Dashboard />}/> 
    <Route path={`*`} element={<ErrorPage />}/> 
  </Routes>
  )
}

export default RouteApp