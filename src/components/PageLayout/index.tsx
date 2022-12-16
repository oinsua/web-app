import React from 'react'
import NavBar from '../NavBar';
import styles from './css/page.module.css';

export type props = {
    children: React.ReactNode;
};

function PageLayout({children}: props) {
  return (
    <div className={styles.pageContainer}>
     <NavBar/>
     {
        children
     }
    </div>
  )
}

export default PageLayout