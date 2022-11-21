import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../app/hooks';
import { getDataForm, initialState } from '../../features/dataForm/dataSlice';
import { Tasks } from '../../model/Task';

export enum actionButton {
    CREATE = 'create',
    UPDATE = 'update',
}

export function useDataForm() {
    const dataFormState = useAppSelector(getDataForm);
    const [task, setTask] = useState<Tasks>(initialState);
    const nameButton = useRef(actionButton.CREATE);

    useEffect(() => {
        if(dataFormState.id){
            setTask(dataFormState);
            nameButton.current = actionButton.UPDATE;
        }
    }, [dataFormState.id])
  return {
      task,
      setTask,
      nameButton
  }
}
