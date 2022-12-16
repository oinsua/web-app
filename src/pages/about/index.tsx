import { Link, Outlet } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import { useAsync } from '../../hook/useAsyncComponentClean';
import useFetchAndLoad from '../../hook/useFecthAndLoad';
import { GO_TO } from '../../model/Routes'
import { getPost } from '../../services/publicServices';
import ShowPost from './components/ShowPost';
import useGetPostsValues from './hooks/useGetPostsValues';

function About() {
  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () => await callEndpoint(getPost());
  useAsync(getApiData, useGetPostsValues, () => {});

  return (
    <PageLayout>
        <div>About</div>
        <Link to={GO_TO.WHO}>Go To WHO</Link>
        <Outlet />
        {
          loading 
                  ? 
                    <h3>Loading....</h3>
                  : 
                    <p>datos</p>
        }
    </PageLayout>
    
  )
}

export default About