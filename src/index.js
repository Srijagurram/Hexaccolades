import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
//import { msalConfig } from "./authConfig";
import { BrowserRouter } from 'react-router-dom';
import { AzureAD } from 'react-aad-msal';
//import { msalConfig } from './authConfig';
import { authProvider } from './authConfig';
import LoginView from './Components/Views/LoginView';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const msalInstance = new PublicClientApplication(msalConfig);

root.render(
     //<MsalProvider instance={msalInstance}>
     
        <React.StrictMode>
             <BrowserRouter>   
             <App/>
                <AzureAD provider={authProvider}>
                <LoginView/>
                </AzureAD>
             </BrowserRouter>
         </React.StrictMode>
    //</MsalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
