import { useAppDispatch } from 'hook/hooks';
import { updateData } from "app/redux/features/dataForm/dataSlice";
import { deleteTask } from "app/redux/features/tasks/taskSlice";
import { Tasks } from 'model/Task';

export type props = {
    task: Tasks
};

function UpdateTaks({task}: props) {

   const dispatch = useAppDispatch();

    const handleUpdate = () => {
       dispatch(updateData(task));
       dispatch(deleteTask(task.id));
    };
  return <button onClick={handleUpdate}>Update</button>
}

export default UpdateTaks