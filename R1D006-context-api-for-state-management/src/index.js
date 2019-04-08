import React from 'react';
import ReactDOM from 'react-dom';
import Router from "react-router-dom/Router";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StateProvider } from './state';
import { initialState, homeReducer } from './reducers';
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory();


// provider provides store for ALL child components
ReactDOM.render(
    <Router history={history}>
        <StateProvider initialState={initialState} reducer={homeReducer}>
            <App />
        </StateProvider>    
    </Router>, document.getElementById('root'));
registerServiceWorker();
