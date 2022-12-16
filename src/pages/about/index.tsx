import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { postsAdapter } from '../../adapters/posts';
import PageLayout from '../../components/PageLayout'
import { useAsync } from '../../hook/useAsyncComponentClean';
import useFetchAndLoad from '../../hook/useFecthAndLoad';
import { InitialPosts, Posts } from '../../model/Posts';
import { GO_TO } from '../../model/Routes'
import { getPost } from '../../services/publicServices';

function About() {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [posts, setPosts] = useState(InitialPosts);
  const getApiData = async () => await callEndpoint(getPost());
  const getValues = (data: any) => {
    const result = postsAdapter(data);
    setPosts(result)
  }
  useAsync(getApiData, getValues, () => {});

  const showPosts = () => {
    return (
      <>
       {
        posts.map(post => (
          <div style={{border: "1px solid white", margin: "1rem",  padding: "1rem", borderRadius: "25px"}}>
            <span>Number: {post.number}</span>
            <h3>Title: {post.title}</h3>
            <h6>Description:</h6>
            <p>{post.text}</p>
          </div>
        ))
       }
      </>
    )
  }

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
                  showPosts()
        }
    </PageLayout>
    
  )
}

export default About