import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import reducer from './reducer'
import {Provider} from 'react-redux'
import Counter from './Counter_redux'

const store = createStore(reducer)

ReactDOM.render(
  <div>
  {/* // <Provider store={store}> */}
    {/* <App /> */}
    <Counter />
  {/* // </Provider> */}
  </div>
  ,
  document.getElementById('root')
);