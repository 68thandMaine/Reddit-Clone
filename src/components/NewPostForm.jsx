import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

export default function NewPostForm(props){
  let _userName = null;
  let _body = null;
  let _pic = null;

  function handleNewPostFormSubmission(event){
    event.preventDefault();
    console.log("userName: " + _userName.value,);
    console.log("body: " + _body.value);
    console.log("picture url: " + _pic.value);

    _userName.value='';
    _body.value='';
    _pic.value=''
  }

  const wrapperStyles={

  }
  const nameStyles={

  }
  const bodyStyles={

  }
  const picStyles={

  }
  return(
    <div style={wrapperStyles}>
        <form onSubmit={handleNewPostFormSubmission}>
          <div style={nameStyles}>
            <label>User Name: </label>
            <input
              type: 'text'
              id: 'userName'
              ref={(input) => { _userName = input}} />
          </div>
          <div style={bodyStyles}>
            <label>Post</label>
            <input
              type: 'text'
              id: 'body'
              ref={(input) => { _body = input }} />
          </div>
          <div style={picStyles}>
            <label>Picture URL</label>
            <input
              type: 'text'
              id: 'pic'
              ref={(input) => {_pic = input }} />
          </div>
        </form>
    </div>
  );

}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};
