import React from 'react'
import { Posts } from '../../../model/Posts'

export default function ShowPost({posts}: [Posts] | any) {
  return (
    <>
       {
        posts.map((post: Posts )  => (
          <div key={post.number} style={{border: "1px solid white", margin: "1rem",  padding: "1rem", borderRadius:"20px"}}>
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
