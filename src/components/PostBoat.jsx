import React from 'react'
import PropTypes from 'prop-types';
import PostBody from './PostBody'

export default function PostBoat(props){
  const wrapperStyles ={
    border:'solid black 1px',
    padding: '10px',
    marginBottom: '10px',
    height: 'auto'
  }
  const postContentStyles={
    border: 'solid red 1px',
    paddingLeft:'10%',
    position: 'static',
    zIndex:'0'
  }

  const countStyles={

    display: 'inline-block',
    position: 'relative',
    top: '230px',
    left: '1%',
    zIndex: '1',
    fontSize: '25px',
    fontFamily: 'BentonSans, sans-serif',
  }


  return(
    <div>
      {Object.keys(props.allPosts).map((postId) =>{
        let post = props.allPosts[postId];
        return(
          <PostBody
            userName={post.userName}
            body={post.body}
            pic={post.pic}
            key={postId} />
        )
      })}
    </div>
  );
}
PostBoat.propTypes= {
  allPosts: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      pic: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};
