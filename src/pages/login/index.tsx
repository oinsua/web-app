import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hook/hooks';
import PageLayout from '../../components/PageLayout';
import { addUser } from "app/redux/features/user/userSlice";
import { GO_TO } from '../../model/Routes';

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('login');
        e.preventDefault();
        dispatch(addUser({
            name: 'oinsua',
            permission: ['analize'],
            rol: ['']
        }))
        navigate(GO_TO.HOME);
    };
  return (
    <PageLayout>
        <div>Login</div>
        <form>
            <input type='text' placeholder='Put in your user' />
            <input type='password' placeholder='Put in your password' />
            <button onClick={handleClick}>Login</button>
        </form>
    </PageLayout>
  )
}

export default Login