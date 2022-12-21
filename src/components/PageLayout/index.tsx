import React from 'react'
import NavBar from '../NavBar';
import styles from './css/page.module.css';
import { version }  from 'lib/version.js';

export type props = {
    children: React.ReactNode;
};

function PageLayout({children}: props) {
  return (
    <div className={styles.pageContainer}>
      <span>Version: {version}</span>
     <NavBar/>
     {
        children
     }
    </div>
  )
}

export default PageLayout