import { Navigate, Outlet } from 'react-router-dom';

type props = {
    url: string;
    isAllowed: boolean;
    children?: any;
}

function ProtecterRouter({url, isAllowed, children}:props) {
    console.log('isAllowed:', isAllowed)
    if(!isAllowed){
        return <Navigate to={url}/>
    }
    return children ? children : <Outlet />
}

export default ProtecterRouter