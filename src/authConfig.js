// export const msalConfig = {
//       auth: {
//         clientId: "bb0902f8-10e0-4f8d-b518-19a19ae9003e",
//         authority: "https://login.microsoftonline.com/1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
//         redirectUri: "http://localhost:3000/Home",
//         navigateToLoginRequestUrl: false,
//       },
//       cache: {
//         cacheLocation: "sessionStorage", // This configures where your cache will be stored
//         storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//       }
//     };
 
//     // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
//     export const loginRequest = {
//      scopes: ["User.Read"]
//     };

//     // Add the endpoints here for Microsoft Graph API services you'd like to use.
//     export const graphConfig = {
//         graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
//     };


 import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
 // Msal Configurations
 const config = {
   auth: {
     authority: 'https://login.microsoftonline.com/1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a',
     clientId: 'bb0902f8-10e0-4f8d-b518-19a19ae9003e',
     redirectUri: 'http://localhost:3000/Home',
     navigateToLoginRequestUrl: false,
   },
   cache: {
     cacheLocation: "localStorage",
     storeAuthStateInCookie: false
   }
 };

 // Authentication Parameters
 const authenticationParameters = {
   scopes: ['user.read'
     //'https://Hexmet.onmicrosoft.com/Hexaccolades/demo.read'
]
 }
 
 // Options
 const options = {
   loginType: LoginType.Redirect,
   //tokenRefreshUri: window.location.origin + '/auth.html'
 }
 
 export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)
