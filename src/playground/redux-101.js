import { createStore } from 'redux';
//redux.js.org
const incrementCount = ({incrementBy = 10} = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({decrementBy = 5} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
	type: 'RESET'
});

const setCount = ({count = 68} = {}) => ({
    type: 'SET',
    count
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
	case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;  
  } 	
};

const store = createStore(countReducer);


console.log(store.getState());
const unsubscribe = store.subscribe(() => {
    	console.log(store.getState());
});
store.dispatch(incrementCount({incrementBy: 15}));
store.dispatch(incrementCount());
//unsubscribe();
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount());
//console.log(store.getState());