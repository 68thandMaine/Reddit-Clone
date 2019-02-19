import React from 'react';
import PropTypes from 'prop-types';

export default function PostBody(props){
  const wrapperStyles={
    border: 'solid black 1px',
    padding: '10px'
  }

  return(
    <div>
      <h1>{props.userName}</h1>
      <hr />
      <h1>{props.body}</h1>
      <hr />
      <h1>picture url: {props.pic}</h1>
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
