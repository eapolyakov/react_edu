import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {getUser, getUsers} from './state';

ReactDOM.render(<React.StrictMode>
  <App functions={{
      getUser: getUser,
      getUsers: getUsers
    }}/>
</React.StrictMode>, document.getElementById('root'));

serviceWorker.unregister();
