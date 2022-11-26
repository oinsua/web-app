import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/redux/hooks'
import { getUser } from '../../features/user/userSlice'
import { GO_TO } from '../../model/Routes';

function ProtecterRouter() {
    const user = useAppSelector(getUser);
    console.log('user: ', user);

    if(user.name === ''){
        return <Navigate to={GO_TO.ROOT}/>
    }
    return <Outlet />
}

export default ProtecterRouter