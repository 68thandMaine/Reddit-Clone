import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

export default function NewPostForm(props){
    let _userName = null;
    let _body = null;
    let _pic = null;

    function handleNewPostFormSubmission(event){
        event.preventDefault();
        props.onNewPostCreation({ userName: _userName.value, body: _body.value, pic: _pic.value, count: 0, id: v4() });
        _userName.value='';
        _body.value='';
        _pic.value='';
    }

    const wrapperStyles={
      border: 'solid black 1px',
      padding: '10px'
    };
    const nameStyles={
      border: 'solid black 1px',
      padding: '10px'
    };
    const bodyStyles={
      border: 'solid black 1px',
      padding: '10px'
    };
    const picStyles={
      border: 'solid black 1px',
      padding: '10px'
    };
    const buttonStyles={
      border: 'solid black 1px',
      padding: '10px'
    };
    return(
        <div style={wrapperStyles}>
            <form onSubmit={handleNewPostFormSubmission}>
                <div style={nameStyles}>
                    <label>User Name: </label>
                    <input
                        type= 'text'
                        id= 'userName'
                        ref={(input) => { _userName = input;}} />
                </div>
                <div style={bodyStyles}>
                    <label>Post</label>
                    <input
                        type= 'text'
                        id= 'body'
                        ref={(input) => { _body = input; }} />
                </div>
                <div style={picStyles}>
                    <label>Picture URL</label>
                    <input
                        type= 'text'
                        id= 'pic'
                        ref={(input) => {_pic = input; }} />
                </div>
                <button style={buttonStyles} type="submit">Submit</button>
            </form>
        </div>
    );

}

NewPostForm.propTypes = {
    onNewPostCreation: PropTypes.func
};
