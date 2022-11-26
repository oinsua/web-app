
import { Link } from 'react-router-dom';
import { GO_TO } from '../../model/Routes';
import styles from './css/error.module.css';

export default function ErrorPage() {

  return (
    <div id="error-page" className={styles.ErrorContainer}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
       <p>
         <b>Status Error: </b><i>400</i>
      </p>
      <p>
         <b>Message Error: </b><i>Not Fount</i>
      </p> 
      <Link to={GO_TO.ROOT}>Go To Home</Link>
    </div>
  );
}