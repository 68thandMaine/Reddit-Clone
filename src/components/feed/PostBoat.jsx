import React from 'react'
import PropTypes from 'prop-types';
import PostBody from './PostBody'

export default class PostBoat extends React.Component{
  constructor(props){
    super(props);
    this.upClick = this.upClick.bind(this)
    this.downClick = this.downClick.bind(this)
  }

   upClick(post){
    console.log(post)
    post.count ++;
    console.log( post.count )
    this.props.onVoteChange();
  }
   downClick(post){

    post.count --;

    this.props.onVoteChange();
  }

render(){
  const wrapperStyles ={
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


  return(
    <div>
    {this.props.allPosts.map((post)=>
      <div style={wrapperStyles}>

        <div style={voteStyles} onClick={()=>this.upClick(post)}>UpVote</div>

        <div style={countStyles}>{post.count}</div>
      <div style={postContentStyles}>
        <PostBody
          userName={post.userName}
          body={post.body}
          pic={post.pic}
          key={post.id} />
      </div>
      <div style={voteStyles} onClick={()=>this.downClick(post)}>DownVote</div>
    </div>
    )}
    </div>
  );
}
}
PostBoat.propTypes= {
  allPosts: PropTypes.array,
  onVoteChange: PropTypes.func
};
