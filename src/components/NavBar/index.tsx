import { NavLink } from 'react-router-dom';
import { GO_TO } from '../../model/Routes';
import styles from './css/navBar.module.css';

export type props = {
    isActive: boolean;
    isPending: boolean;
};


function NavBar() {
    const handleCss = ({isActive, isPending}: props) => {
        if(isActive){
            return styles.linkActive;
        }
        return styles.link;
    };

  return (
    <div>
        <ul className={styles.ul_list}>
            <li className={styles.li_list}>
                <NavLink to={GO_TO.ROOT} className={handleCss}>Root</NavLink>
            </li>
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
                <NavLink to={GO_TO.DASHBOARD} className={handleCss}>Dashboard</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar