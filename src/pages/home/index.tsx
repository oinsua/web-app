import classNames from 'classnames';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { GO_TO } from '../../model/Routes';
import styles from './css/home.module.css';

function Home() {
const numberId = useRef(2);
const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = parseInt((e.target as HTMLElement).innerText);
    const listDiv = window.document.querySelectorAll('.NPS');
    for(let i = 0; i < listDiv.length; i++){
      listDiv[i].classList.remove(styles.gridItemRed)
      listDiv[i].classList.remove(styles.gridItemYellow)
      listDiv[i].classList.remove(styles.gridItemGreen)
    }
    if(value <= 6){
      (e.target as HTMLElement).classList.toggle(styles.gridItemRed);
    } else if( value >= 9){
      (e.target as HTMLElement).classList.toggle(styles.gridItemGreen);
    } else {
      (e.target as HTMLElement).classList.toggle(styles.gridItemYellow);
    }
};
return (
  <PageLayout>
    <div id="contact" className={styles.homeContainer}>
      <h1>Home Page</h1>
      <Link to={`${GO_TO.TASK}/${numberId.current}`}>Taks</Link>
    </div>
    <div className={styles.gridContainer1} onClick={handleClick}>
      {
        [0,1,2,3,4].map(number => <div key={number} className={classNames(styles.gridItem1, 'NPS')}>{number}</div>)
      }
    </div>
    <div  className={styles.gridContainer2} onClick={handleClick}>
      {
        [5,6,7,8,9,10].map(number => <div key={number} className={classNames(styles.gridItem2, 'NPS')}>{number}</div>)
      } 
    </div>
  </PageLayout>
);
}

export default Home