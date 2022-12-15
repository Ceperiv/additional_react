import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {setupStore} from "./redux";
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {history} from './services/'

let store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter history={history}>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);


reportWebVitals();
