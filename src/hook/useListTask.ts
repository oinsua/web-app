import { useEffect } from 'react'
import { io } from "socket.io-client";
import { useAppDispatch } from './hooks';
import { listTask } from "app/redux/features/tasks/taskSlice";;

export function useListTasks() {
  const socket = io(process.env.REACT_APP_SOCKET_URL || '');
  /* const [tasks, setTasks] = useState(initialState); */
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.emit('client:listTasks', {});
  },[socket]);

  socket.on('server:listTasks', (list) => {
    console.log('lisTasks: ', list)
    /* setTasks(list); */
    dispatch(listTask(list))
  })

 /*  return {tasks} */
}