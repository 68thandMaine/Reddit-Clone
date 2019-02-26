import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    const wrapperStyles={
        border: 'solid black 1px',
        padding: '10px'
    };
    const linkStyles={
        paddingRight: '18%',
        paddingLeft:'22%'
    };
    return(
        <div style={wrapperStyles}>
            <Link style={linkStyles} to='/newpost'>Create Post</Link>
            <Link style={linkStyles} to='/'>Home</Link>
        </div>
    );
}
