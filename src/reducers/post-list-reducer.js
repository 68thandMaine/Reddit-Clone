export default(state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'ADD_POST':
      const { type, id, userName, body, pic, votes, timeStamp } = action;
         newState = Object.assign({}, state, {
        [id]: {
          userName: userName,
          id: id,
          pic: pic,
          votes: votes,
          body: body,
          timeStamp: timeStamp
        }
      });
      return newState;
    case 'BY_VOTE':
    let feedArray = Object.keys(state).map(postId => state[postId]);
    feedArray.sort(function(a, b) {
      return b.votes -a.votes
    });
    return feedArray;
    default:
      return state;
  }
};
