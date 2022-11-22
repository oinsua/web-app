import { createBrowserRouter } from "react-router-dom";
import { GO_TO } from "../../model/Routes";
import Home from '../../pages/home';
import Task from '../../pages/Task'


export const router = createBrowserRouter([
    {
      path: GO_TO.HOME,
      element: <Home />
    },
    {
      path: GO_TO.TASK,
      element: <Task />
    }
  ]);