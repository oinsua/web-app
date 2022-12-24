import React from 'react'
import NavBar from '../NavBar';
import styles from './css/page.module.css';
import { version }  from 'lib/version.js';
import ShowLoginLogout from 'components/ShowLoginLogout';

export type props = {
    children: React.ReactNode;
};

function PageLayout({children}: props) {
  return (
    <>
      <ShowLoginLogout/>
      <div className={styles.pageContainer}>
        <span>Version: {version}</span>
      <NavBar/>
      {
          children
      }
      </div>
    </>
  )
}

export default PageLayout