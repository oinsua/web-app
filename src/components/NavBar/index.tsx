import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'hook/hooks';
import { getUser } from 'app/redux/features/user/userSlice';
import { GO_TO } from '../../model/Routes';
import styles from './css/navBar.module.css';

export type props = {
    isActive: boolean;
    isPending: boolean;
};


function NavBar() {
    const userRedux = useAppSelector(getUser);
    const handleCss = ({isActive, isPending}: props) => {
        if(isActive){
            return styles.linkActive;
        }
        return styles.link;
    };

  return (
    <div>
        <ul className={styles.ul_list}>
           
            {
                userRedux.name === '' ?
                            (
                                <li className={styles.li_list}>
                                    <NavLink to={GO_TO.ROOT} className={handleCss}>Root</NavLink>
                                </li>
                            )
                        :
                            (
                            <>
                                <li className={styles.li_list}>
                                    <NavLink to={GO_TO.HOME} className={handleCss}>Home</NavLink>
                                </li>
                                <li className={styles.li_list}>
                                    <NavLink to={GO_TO.ABOUT} className={handleCss}>About</NavLink>
                                </li>
                                <li className={styles.li_list}>
                                    <NavLink to={GO_TO.TASK} className={handleCss}>Task</NavLink>
                                </li>
                                <li className={styles.li_list}>
                                    <NavLink to={GO_TO.CONTACT} className={handleCss}>Contact</NavLink>
                                </li>
                                <li className={styles.li_list}>
                                    <NavLink to={`/chat/${1}`} className={handleCss}>Chat</NavLink>
                                </li>
                                {
                                    userRedux.permission.includes('analize' as never) && (
                                    <li className={styles.li_list}>
                                        <NavLink to={GO_TO.DASHBOARD} className={handleCss}>Dashboard</NavLink>
                                    </li>
                                    )
                                }
                                {
                                    userRedux.rol.includes('admin' as never) && (
                                        <>
                                        <li className={styles.li_list}>
                                            <NavLink to={GO_TO.DASHBOARD} className={handleCss}>Dashboard</NavLink>
                                        </li>
                                        <li className={styles.li_list}>
                                                <NavLink to={GO_TO.ADMIN} className={handleCss}>Admin</NavLink>
                                        </li>
                                        </>
                                    )
                                }
                                
                            </>
                    )
            }
        </ul>
    </div>
  )
}

export default NavBar