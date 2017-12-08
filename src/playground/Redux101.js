// import function createStore
import { createStore } from 'redux';



// These are action generator functions is actions.js

// Action Generator Function 
// set up a function that with param of payload defaulted to empty object
// return action type and any other var you want off payload data
// const incrementCount = (payload = {}) => {
//     return {
//         type: 'INCREMENT',
//         incrementby: typeof payload.incrementby === "number" ? payload.incrementby : 1
//     }
// }

// destructured it looks like this
// grab incrementby from payload and set it as a var
// set its default value to 1 if not provided
// if increment by doesn't exist set to an empty object 
// which would default to 1


const incrementCount = ( { incrementby = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementby: incrementby
    }
}

const decrementCount = ( {decrementby = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementby: decrementby
    }

}

const resetCount = () => {
    return {
        type: 'RESET'
    }

}

const setCount = ( {count = 10 } =  {} ) => {
    return {
        type: 'SET',
        count: count
    }
}



// These are reducers 
// create store requires a function be passed to it, that function passes state
// similar to this.setState
// with no constructor you can set up state in param and it becomes the default state object
// dispatch runs this again
// by having action param we can manupulate state. 
// if action.type from dispatch matches INCREMENT return new updated state


// REDUCER FUNCTIONAL COMPONENT
// 1. attributes are pure functions
// output is only determined by input compute on  state and action only
// 2. never change state or action directly or reassign or mutate
// return object that returns new state

const countReducer = ( state = { count: 0 }, action ) => {
    
        switch (action.type) {
            case 'INCREMENT':
                return{
                    count: state.count + action.incrementby
                };
            
            case 'DECREMENT':   
                return{
                    count: state.count - action.decrementby
                };
            
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
      
    
    }

const store = createStore(countReducer);

// subscribe is another function available that gets called everytime state is updated
// you can unsubscribe at anytime because subscribe returns unsubscribe function that allows you to turn it off
// by setting as var and calling the return function as a function
const unsubscribe = store.subscribe( () => {
console.log(store.getState());
})

// getState() is a method on the store var it returns the state object

// ACTIONS
// Increment count and reset count with actions


// Action is an object that gets sent to the store
// Object describes type of action want to take

// walk, stop_walking, stand, sit

// increment, decrement, reset
// dispatch is a method that allows us to send action object 

// Action Generators return action objects



// store.dispatch({
//     type: 'INCREMENT',
//     incrementby: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// })

// These are function calls from user interaction

store.dispatch(incrementCount({ incrementby: 5 }))
store.dispatch(incrementCount())

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount( {decrementby: 10} ));
store.dispatch(setCount({ count: 100 }));




