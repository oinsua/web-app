import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GO_TO } from '../../model/Routes';
import { addUser, getUser, initialState } from '../../features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../app/redux/hooks';

function ShowLoginLogout() {
    const [user, setUser] = useState(initialState);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleLogin = () => {
        //request done
        setUser({
            ...user,
            name: 'oinsua'
        })
        dispatch(addUser({
            ...user,
            name: 'oinsua'
        }))
        console.log('handleLogin')
        navigate(GO_TO.TASK);
    };

    const handleLogout = () => {
        setUser(initialState);
        dispatch(addUser(initialState))
        navigate(GO_TO.HOME);
    };

  return ( user.name === '' ? 
                                <button style={styles.button} onClick={handleLogin}>Login</button> 
                            : 
                                <button style={styles.button} onClick={handleLogout}>Logout</button>
         )
}
export default ShowLoginLogout

const styles = {
        button: {
            margin: '1rem',
            padding: '0.5rem',
            cursor: 'pointer',
        }
};