import { useAppSelector } from '../../hook/hooks'
import { getTask } from '../../features/tasks/taskSlice'
import { useListTasks } from '../../hook/useListTask';
import DeleteTask from '../DeleteTask';
import UpdateTaks from '../UpdateTask';


function TaskList() {
    const taksList = useAppSelector(getTask);
    useListTasks();
  return (
    <>
     <h3>List of Tasks</h3>
     {
        taksList.map((item, index) => (
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