export default(state = {}, action) => {
  let id;
  let newPost;
  let newState;
  switch (action.type) {
    case 'UPVOTE':

      id = action.id
      newPost = Object.assign({}, state[id])
      newPost.votes++;
      newState = Object.assign({}, state, {
      [id]: newPost
      });
      return {[id]: newState[id]};
    case 'DOWNVOTE':
      id = action.id
      newPost = Object.assign({}, state[id])
      newPost.votes--;
      newState = Object.assign({}, state, {
        [id]: newPost
      });
      return {[id]: newState[id]}
    default:
      return state;
  }
}
