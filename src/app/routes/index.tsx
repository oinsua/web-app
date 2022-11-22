import { createBrowserRouter } from "react-router-dom";
import { GO_TO } from "../../model/Routes";
import Home from '../../pages/home';
import Task from '../../pages/Task';
import ErrorPage  from "../../pages/Error";


export const router = createBrowserRouter([
    {
      path: GO_TO.HOME,
      element: <Home/>,
      errorElement: <ErrorPage/>
    },
    {
      path: GO_TO.TASK,
      element: <Task />,
      errorElement: <ErrorPage/>
    }
  ]);