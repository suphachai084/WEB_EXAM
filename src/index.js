import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

const reducer = () =>{
 return "foo";
}
const store = createStore(reducer, 0);

store.subscribe(() => {console.log("store change: "+store.getState());});
store.dispatch({type: 'INC',payload:1})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
