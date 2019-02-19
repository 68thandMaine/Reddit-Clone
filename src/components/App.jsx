import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import NewPostForm from './NewPostForm';
import FeedControl from './feed/FeedControl';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            masterPostList: []
        };
        this.handleAddingNewPostToList= this.handleAddingNewPostToList.bind(this);
    }


    handleAddingNewPostToList(newPost){
        let newMasterPostList = this.state.masterPostList.slice();
        newMasterPostList.push(newPost);
        this.setState({ masterPostList: newMasterPostList });
    }





    render(){
        const wrapperStyles={
            border: 'solid black 1px'
        };

        return (
            <div style={wrapperStyles}>
                <Header />
                <Switch>
                    <Route exact path ='/' render={() => <FeedControl postList={this.state.masterPostList} />} />
                    <Route path='/newpost' render={() =>
                        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />} />
                </Switch>
            </div>
        );
    }
}
