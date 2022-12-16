import { useAppSelector } from 'hook/hooks'
import { getTask } from "app/redux/features/tasks/taskSlice";
import { useListTasks } from '../../hook/useListTask';
import DeleteTask from '../DeleteTask';
import UpdateTaks from '../UpdateTask';
import { Tasks } from 'model/Task';


function TaskList() {
    const taksList: Tasks[] | any = useAppSelector(getTask);
    useListTasks();
  return (
    <>
     <h3>List of Tasks</h3>
     {
        taksList.map((item: Tasks | any, index: number | any) => (
            <article key={item.id} style={{border: "1px solid black", margin: "1rem", padding: "1rem"}}>
                <p>{`Nro: ${index+1}`}</p>
                <p>{`Number Task: ${item.id}`}</p>
                <p>{`Name Task: ${item.name}`}</p>
                <p>{`Status Task: ${item.status}`}</p>
                <p>{`Time Task: ${item.time}`}</p>
                <UpdateTaks task={item} />
                <DeleteTask id={item.id} />
            </article>
        ))
     }
    </>
  )
}

export default TaskList