import { useRouteError } from "react-router-dom";
import { ErrorResponse } from "./model/error_model";
import styles from './css/error.module.css';

export default function ErrorPage() {
  const error  = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <div id="error-page" className={styles.ErrorContainer}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
         <b>Status Error: </b><i>{error.status}</i>
      </p>
      <p>
         <b>Message Error: </b><i>{error.statusText}</i>
      </p>
    </div>
  );
}