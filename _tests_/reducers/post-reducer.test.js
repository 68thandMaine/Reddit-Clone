import postReducer from './../../src/reducers/post-reducer';
import Moment from 'moment';


describe('postReducer', () => {
  let action;
  let state;
  const samplePostData = {
    0: {
      userName: 'foru',
      body: 'This page is pretty cool I guess',
      pic: 'fdak',
      votes: 0,
      id: 0,
      timeStamp: new Moment()
    }
  }

  function samplePostDataCopy(){
    return Object.assign({}, samplePostData);
  }

  test('Should return the default state if no action type is recognized', () => {
    expect(postReducer({}, { type: null })).toEqual({});
  });
  test('Should increment the vote propety by one', () => {
    action = Object.assign({}, {id: samplePostData[0].id}, {type: 'UPVOTE'})
    state = samplePostDataCopy();
    expect(postReducer(state, action )).toEqual({
      0: {
        userName: 'foru',
        body: 'This page is pretty cool I guess',
        pic: 'fdak',
        votes: 1,
        id: 0,
        timeStamp: samplePostData[0].timeStamp
      }
    });
  });
  test('Should decrement the vote property by one', () => {
    action = Object.assign({}, {id: samplePostData[0].id}, {type: 'DOWNVOTE'})
    state = samplePostDataCopy();
    expect(postReducer(state, action)).toEqual({
      0: {
        userName: 'foru',
        body: 'This page is pretty cool I guess',
        pic: 'fdak',
        votes: -1,
        id: 0,
        timeStamp: samplePostData[0].timeStamp
      }
    });
  });
});
