const reduxToolkit = require('@reduxjs/toolkit');
const createSlice = reduxToolkit.createSlice;
const configureStore = reduxToolkit.configureStore;

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value:0
    },
    reducers: {
        increment: state => {
            state.value+=1;
        },
        decrement: state => {
            state.value-=1;
        }
    }
})

const { increment, decrement } = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())