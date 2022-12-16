import { useState } from 'react'
import { postsAdapter } from '../../../adapters/posts';
import { InitialPosts } from '../../../model/Posts';

export default function useGetPostsValues(data: any) {
    const [posts, setPosts] = useState(InitialPosts);
    const result = postsAdapter(data);
    setPosts(result)
  return {
    posts
  }
}
