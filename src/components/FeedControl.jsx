import React from 'react';
import PropTypes from 'prop-types';
import PostBoat from './postboat';

export default class FormControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      postsOnPage: []
    };
    // this.handleUpVotesandDownVotes = this.handleUpVotesandDownVotes.bind(this);
    }


  // handleUpVotesandDownVotes(postId, vote) {
  //     let orderedPostsByLikes = this.state.postsOnPage.slice();
  //     orderedPosts.forEach((post) =>
  //
  //   })

    render(){
      const wrapperStyles={
        border: 'solid black 1px',
        padding: '10px'
      }

      return(
        <div style={wrapperStyles}>
          <PostBoat

            allPosts={this.props.postList}/>

        </div>
      );
    }

  }
