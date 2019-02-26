import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './Header';
import NewPostForm from './NewPostForm';
import PostBoat from './PostBoat';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    // handleAddingNewPostToList(newPost){}

    // handleSortingMasterPostList(){}

    render(){
        const wrapperStyles={
            border: 'solid black 1px'
        };

        return (
            <div style={wrapperStyles}>
                <Header />
                <Switch>
                    <Route exact path ='/' render={() => <PostBoat allPosts={this.props.masterPostList}  />} />
                    <Route path='/newpost' render={() =>
                        <NewPostForm />} />
                </Switch>
            </div>
        );
    }
}

App.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
    return {
        masterPostList: state
    };
};

export default withRouter(connect(mapStateToProps)(App));
