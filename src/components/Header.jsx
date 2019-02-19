import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div>
            <p>I'm the header</p>
            <Link to='/newpost'>Create Post</Link>
            <Link to='/'>Home</Link>
        </div>
    );
}
