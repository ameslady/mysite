import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
