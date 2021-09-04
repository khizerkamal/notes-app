import { createStore } from 'redux';
import rootReducers from './reducers';

//const store = createStore(rootReducers)
export default createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// module.exports = store
