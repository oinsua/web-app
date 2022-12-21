import { postsAdapter } from 'adapters/posts';
import { createPost } from 'app/redux/features/posts/postSlice';
import { useAppDispatch } from 'hook/hooks';
import { InitialPosts } from 'model/Posts';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import PageLayout from 'components/PageLayout'
import { useAsync } from 'hook/useAsyncComponentClean';
import useFetchAndLoad from 'hook/useFecthAndLoad';
import { GO_TO } from 'model/Routes'
import { getPost } from 'services/publicServices';
import ShowPost from './components/ShowPost';

function About() {
  const [posts, setPosts] = useState(InitialPosts);
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useAppDispatch();
  
  const getPostsValues = (data: any) => {
    const result = postsAdapter(data);
    setPosts(result)
    dispatch(createPost(result));
  };

  const getApiData = async () => await callEndpoint(getPost());

  useAsync(getApiData, getPostsValues, () => {});

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
                    <ShowPost posts={posts} />
        }
    </PageLayout>
    
  )
}

export default About