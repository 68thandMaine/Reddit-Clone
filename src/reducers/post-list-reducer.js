export default(state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
      const { type, id, userName, body, pic, votes } = action
      let newState = Object.assign({}, state, {
        [id]: {
          type: type,
          userName: userName,
          id: id,
          pic: pic,
          votes: votes,
          body: body
        }
      });
      return newState;
    default:
      return state;
  }
};
