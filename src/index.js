import React from 'react';
import {createStore} from 'redux';

import ReactDOM from 'react-dom';
import './index.css';
import movies from './reducers'
import App from './component/App';


const store = createStore(movies);
console.log(store);


// store.dispatch({
//       type : 'ADD_MOVIES' ,
//       movies : [{name : 'supeprname'}]
//   });

  // console.log('after',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
