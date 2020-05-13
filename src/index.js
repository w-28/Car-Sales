import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { totalReducer } from './reducers/totalReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

let store = createStore(totalReducer);
// console.log({store}, 'storeeeee')

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
