import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from 'hook/hooks';
import { getDataForm, initialState } from 'app/redux/features/dataForm/dataSlice';
import { Tasks } from 'model/Task';

export enum actionButton {
    CREATE = 'Create',
    UPDATE = 'Update',
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
    }, [dataFormState.id, dataFormState])
  return {
      task,
      setTask,
      nameButton
  }
}
