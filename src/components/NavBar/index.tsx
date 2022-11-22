import { NavLink } from 'react-router-dom';
import { GO_TO } from '../../model/Routes';
import styles from './css/navBar.module.css';

function NavBar() {
  return (
    <div>
        <ul className={styles.ul_list}>
            <li className={styles.li_list}>
                <NavLink to={GO_TO.ROOT} className={styles.link}>Root</NavLink>
            </li>
            <li className={styles.li_list}>
                <NavLink to={GO_TO.HOME} className={styles.link}>Home</NavLink>
            </li>
            <li className={styles.li_list}>
                <NavLink to={GO_TO.ABOUT} className={styles.link}>About</NavLink>
            </li>
            <li className={styles.li_list}>
                <NavLink to={GO_TO.TASK} className={styles.link}>Task</NavLink>
            </li>
            <li className={styles.li_list}>
                <NavLink to={GO_TO.CONTACT} className={styles.link}>Contact</NavLink>
            </li>
            <li className={styles.li_list}>
                <NavLink to={GO_TO.DASHBOARD} className={styles.link}>Dashboard</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar