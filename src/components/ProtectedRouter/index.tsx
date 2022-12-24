import { RootState } from 'app/redux/store';
import { User } from 'model/User';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export type AllowedType = "ALL" | "ADMIN" | "ANALIZE";
export enum AllowedValue {
    All = "ALL",
    ADMIN = "ADMIN",
    ANALIZE = "ANALIZE",
};

type props = {
    url: string;
    isAllowed: AllowedType;
    children?: any;
}

function ProtecterRouter({url, isAllowed, children}:props) {
    console.log('isAllowed:', isAllowed)
    console.log('url:', url)
    const { user } = useSelector((state: RootState) => ({
        user: state.users,
    }))
    console.log({user});
    if(isAllowed === AllowedValue.All && user.name !== ''){
        return children ? children : <Outlet /> 
    }else if(isAllowed === AllowedValue.ANALIZE && user.name !== '' && 
                (user.permission?.includes('analize' as never) || user.rol?.includes('admin' as never))){
        return children ? children : <Outlet /> 
    }else if(isAllowed === AllowedValue.ADMIN && user.name !== '' && user.rol?.includes('admin' as never)){
        return children ? children : <Outlet /> 
    }else {
        return <Navigate to={url}/>
    }
}

export default ProtecterRouter