import React from 'react';
import ReactDOM from 'react-dom';
import Router from "react-router-dom/Router";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { homeReducer } from './reducers';

import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory();

// we could build a rootReducer here instead to collect all single recuders in one file
const store = createStore(homeReducer);

// provider provides store for ALL child components
ReactDOM.render(
    <Router history={history}>
        <Provider store = { store }>
            <App />
        </Provider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
