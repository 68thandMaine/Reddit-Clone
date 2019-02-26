import postListReducer from './../../src/reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
  const samplePostData = {
    userName: 'foru',
    body: 'This page is pretty cool I guess',
    pic: 'fdak',
    votes: 0,
    id: 0
  };

  test('Should return the default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to a masterPostList', () => {
    const { userName, body, votes, pic, id } = samplePostData;
    action = {
      type: 'ADD_POST',
      userName: userName,
      body: body,
      pic: pic,
      votes: votes,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        userName: userName,
        body: body,
        pic: pic,
        votes: votes,
        id: id
      }
    });
  });
});
