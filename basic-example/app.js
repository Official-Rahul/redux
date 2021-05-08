const redux = require("redux");
const createStore = redux.createStore;

function counterReducer(state={value:0}, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {value:state.value+1};
        case 'DECREMENT':
            return {value:state.value-1}
        default:
            return state;
    }
}

const store = createStore(counterReducer);

store.subscribe(()=>console.log(store.getState()));

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});