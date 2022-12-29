import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import Theme from 'resources/theme';
import Routes from 'routes';
import store from './store'
import {Provider} from 'react-redux'
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId='535792898032-i6jpo4p9qutukn6o3n6l601oujruc4q0.apps.googleusercontent.com'>
            <BrowserRouter> 
                <Provider store={store}>
                    <ThemeProvider theme={Theme}>
                        <Routes />
                    </ThemeProvider>,
                </Provider>
            </BrowserRouter>
        </GoogleOAuthProvider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
