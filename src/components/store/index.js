import {createStore} from 'redux';

const redux = require('redux');

const counterRedux = (state = { counter: 0 }, action) => {

  if (action.type === 'increment'){
    return{
      counter: state.counter + 1
    }
  }

  if (action.type === 'increase'){
    return{
      counter: state.counter + action.amount,
    }
  }

  if (action.type === 'decrement'){
    return{
      counter: state.counter - 1
    }
  }
  return state;
}

const store = createStore(counterRedux);

export default store;
