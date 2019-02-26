import React from 'react';
import PropTypes from 'prop-types';

export default function PostBody(props){
  const wrapperStyles={
    border: 'solid black 1px',
    padding: '10px',
    height: 'auto',
    alignItems: 'stretch'
  }
  const userNameStyles={
    fontFamily: 'BentonSans, sans-serif',
    fontSize: '12px',
    color: '#909395'
  }
  const contentStyles={
    fontFamily: 'BentonSans, sans-serif',
    fontSize: '20px',
    fontWeight:'500',
    display: 'block',
    overflowWrap:'break-word',
    width: '34rem',
    lineHeight: '24px',
  }
  const imageContainerStyles={
    display: 'inline-block',
    border: 'solid blue 2px',
    position: 'relative',
    right: '-550px',
    bottom: '100px'
  }
  const imageStyles={
    height:'300px',
    width: 'auto',
  }
  return(
    <div style={wrapperStyles}>
      <p style={userNameStyles}>Posted by u/{props.userName}</p>

      <h2 style={contentStyles}>{props.body}</h2>

      <div style={imageContainerStyles}>
        <img style={imageStyles} src={props.pic} />
      </div>

      <hr />
      <hr />
    </div>
  );
}

PostBody.propTypes = {
  userName: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired
}
