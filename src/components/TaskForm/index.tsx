import React from 'react'
import uuid from 'react-uuid';
import { useAppDispatch } from 'hook/hooks';
import { initialState } from 'app/redux/features/dataForm/dataSlice';
import { createTask } from 'app/redux/features/tasks/taskSlice';
import { socket } from '../../sockets';
import styles from './Task.module.css';
import { actionButton, useDataForm } from './useDataForm';


function TaskForm() {
    const dispatch = useAppDispatch();
    const { task, setTask, nameButton } = useDataForm();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    };

    const handleResetForm = () => {
        nameButton.current = actionButton.CREATE;
        setTask(initialState);
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(task.id === '') dispatch(createTask({...task, id: uuid()}));
        else dispatch(createTask(task));
        const {name, status, time} = task;
        socket.emit('client:createTask', {name, status, time});
        handleResetForm();
    };

  return (
    <div>
        <form onSubmit={handleSubmit} className={styles.root}>
            <input name='name' type='text' onChange={handleChange} value={task.name} className={styles.input} />
            <select name='status' value={task.status} onChange={handleChange} className={styles.input}>
                <option value='TODO'>TODO</option>
                <option value='CURSE'>CURSE</option>
                <option value='TEST'>TEST</option>
                <option value='BLOCKED'>BLOCKED</option>
                <option value='READY'>READY</option>
            </select>
            <input name='time' type='text' onChange={handleChange} value={task.time} className={styles.input} />
            <button className={styles.input}>{nameButton.current}</button>
        </form>
    </div>
  )
}

export default TaskForm
