import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hook/hooks';
import { getTask } from '../../features/tasks/taskSlice';

function GetTask() {
    const taksList = useAppSelector(getTask);
    const { id } = useParams();
    const item = taksList.find((item) => item.id === id);

  return (
    <>
    {
        item ? 
            (
                <article style={{border: "2px solid white", margin: "1rem", padding: "1rem"}}>
                    <p>{`Nro: ${1}`}</p>
                    <p>{`Number Task: ${item.id}`}</p>
                    <p>{`Name Task: ${item.name}`}</p>
                    <p>{`Status Task: ${item.status}`}</p>
                    <p>{`Time Task: ${item.time}`}</p>
                </article>
            )
            :
            (
                <article  style={{border: "1px solid black", margin: "1rem", padding: "1rem"}}>
                    <p>{`Nro: ${1}`}</p>
                    <p>{`Number Task is not exist`}</p>
                </article>
            )
    }
    </>
  );
}

export default GetTask