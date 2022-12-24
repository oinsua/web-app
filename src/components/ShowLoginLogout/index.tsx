import { useNavigate } from 'react-router-dom';
import { GO_TO } from '../../model/Routes';
import { addUser, getUser, initialState } from 'app/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from 'hook/hooks';

function ShowLoginLogout() {
    const userRedux = useAppSelector(getUser);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleLogin = () => {
        //request done
        dispatch(addUser({
            name: 'oinsua',
            permission: [],
            rol: [],
        }))
        console.log('handleLogin')
        navigate(GO_TO.HOME);
    };

    const handleLogout = () => {
        dispatch(addUser(initialState))
        navigate(GO_TO.ROOT);
    };

  return ( userRedux.name === '' ? 
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