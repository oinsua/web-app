import PageLayout from '../../components/PageLayout';
import styles from './css/home.module.css';

function Home() {

return (
  <PageLayout>
    <div id="contact" className={styles.homeContainer}>
      <h1>Home Page</h1>
    </div>
  </PageLayout>
);
}

export default Home