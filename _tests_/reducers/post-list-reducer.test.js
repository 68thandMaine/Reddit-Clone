import postListReducer from './../../src/reducers/post-list-reducer';
import Moment from 'moment';

describe('postListReducer', () => {
  let action;
  const samplePost =
  {
    0: {
      userName: 'foru',
      body: 'This page is pretty cool I guess',
      pic: 'fdak',
      votes: 0,
      id: 0,
      timeStamp: new Moment()
    },
    1: {
      userName: 'fubu',
      body: 'This page is pretty lame I suppose',
      pic: 'fdak',
      votes: 4,
      id: 1,
      timeStamp: new Moment()
    }
  };
  function samplePostData() {
    return Object.assign({}, samplePost);
  };

  test('Should return the default state if no action type is recognized', () => {
    expect(postListReducer(samplePostData(), { type: null })).toEqual(samplePostData());
  });

  test('Should successfully add new post data to a masterPostList', () => {
    action = Object.assign({}, samplePost[0], {type: 'ADD_POST'});
    expect(postListReducer({}, action)).toEqual({
      [0]: samplePost[0]
    });
  });

  test('Should sort the state by vote number', () => {
    expect(postListReducer(samplePostData(), {type: 'BY_VOTE'})).toEqual(
      [
        samplePost[1],
        samplePost[0]
      ]
    )
  });
});
