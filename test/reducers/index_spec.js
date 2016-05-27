import {expect} from 'chai';
import friendApp from '../../app/reducers/index';

describe('reducers/index', () => {

  describe('set name', () => {

    it('mutates name', () => {
      // Arrange
      const state = {
        name: 'jim',
        friends: []
      };
      const action = {
        type: 'SET_NAME',
        name: 'bob'
      }

      // Act
      const nextState = friendApp(state, action);

      // Assert
      expect(nextState).to.deep.equal({
        name: 'bob',
        friends: []
      });
    })

  })


  describe('add friend', () => {

    it('pushes friend to friends', () => {
      // Arrange
      const state = {
        name: '',
        friends: ['ash']
      };
      const action = {
        type: 'ADD_FRIEND',
        name: 'zaf'
      }

      // Act
      const nextState = friendApp(state, action);

      // Assert
      expect(nextState).to.deep.equal({
        name: '',
        friends: ['ash', 'zaf']
      });
    })

  })

})