import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {cheeseReducer} from './reducers/cheese'
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(cheeseReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
<CheeseList />
</Provider>, document.getElementById('root'));
registerServiceWorker();
