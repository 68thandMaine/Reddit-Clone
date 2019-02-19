import React from 'react'
import PropTypes from 'prop-types';
import PostBody from './PostBody'

export default function PostBoat(props){

  return(
    <div>
    {props.allPosts.map((post)=>
      <PostBody
        userName={post.userName}
        body={post.body}
        pic={post.pic} />
    )}
    </div>
  );
}
