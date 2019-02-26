import React from 'react';

import { connect } from 'react-redux';
import { v4 } from 'uuid';


function NewPostForm(props){
    let _userName = null;
    let _body = null;
    let _pic = null;


    function handleNewPostFormSubmission(event){
        const {dispatch} = props;
        event.preventDefault();
        const action ={
            type: 'ADD_POST',
            id: v4(),
            userName: _userName.value,
            body: _body.value,
            pic: _pic.value,
            votes: 0,

        };
        dispatch(action);
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

export default connect()(NewPostForm);
