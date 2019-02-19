import React from 'react'
import PropTypes from 'prop-types';
import PostBody from './PostBody'

export default function PostBoat(props){
  const wrapperStyles={
    border:'solid black 1px',
    padding: '10px'
  }
  const postContentStyles={
    border: 'solid red 1px',
    paddingLeft:'10%',
    position: 'static',
    zIndex:'0'
  }
  const voteStyles={
    border: 'solid  5px',
    borderRadius: '20%',
    backgroundColor: 'tomato',
    color: 'white',
    height: '10%',
    width: '10%',
    textAlign: 'center',

  }
  const countStyles={
    border: 'solid black 1px',
    display: 'inline-block',
    position: 'relative',
    top: '140px',
    left: '5%',
    zIndex: '1',
  }
  function upClick(post){
    console.log('upvote clicked')
    console.log( post.count)
  }
  function downClick(){
    console.log('downvote clicked')
  }

  return(
    <div>
    {props.allPosts.map((post)=>
      <div style={wrapperStyles}>

        <div style={voteStyles} onClick={()=>upClick(post)}>UpVote</div>

        <div style={countStyles}>{post.count}</div>
      <div style={postContentStyles}>
        <PostBody
          userName={post.userName}
          body={post.body}
          pic={post.pic}
          key={post.id} />
      </div>
      <div style={voteStyles} onClick={downClick}>DownVote</div>
    </div>
    )}
    </div>
  );
}
PostBoat.propTypes= {
  allPosts: PropTypes.array
};
