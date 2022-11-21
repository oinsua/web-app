import { useAppDispatch } from '../../app/hooks';
import { deleteTask } from '../../features/tasks/taskSlice';

export type props = {
    id: string,
};

function DeleteTask({id}: props) {

    const dispatch = useAppDispatch();

    const handleDelete = () => {
      dispatch(deleteTask(id));
    };
  return <button onClick={handleDelete}>Delete</button>
}

export default DeleteTask