export const msalConfig = {
     auth: {
       clientId: "bb0902f8-10e0-4f8d-b518-19a19ae9003e",
       authority: "https://login.microsoftonline.com/1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
       redirectUri: "http://localhost:3000/Home",
       navigateToLoginRequestUrl: false,
     },
     cache: {
       cacheLocation: "sessionStorage", // This configures where your cache will be stored
       storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
     }
   };
  
   // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
   export const loginRequest = {
    scopes: ["User.Read"]
   };
 
   // Add the endpoints here for Microsoft Graph API services you'd like to use.
   export const graphConfig = {
       graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
   };

// import { useIsAuthenticated } from "@azure/msal-react";
// import { Navigate } from "react-router-dom";

// export const msalConfig = {
//   auth: {
//     clientId: "2b0b36e1-614a-4b05-af9f-65c23916f4ac",
//     authority:
//       "https://login.microsoftonline.com/b1cce2ac-5c07-40fe-91cc-09102bfa2522", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
//     redirectUri: "http://localhost:3000/Home",
//     navigateToLoginRequestUrl: true,
//   },
//   cache: {
//     cacheLocation: "localStorage", // This configures where your cache will be stored
//     storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
//   },
// };

// // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
// export const loginRequest = {
//   scopes: ["User.Read"],
// };

// // Add the endpoints here for Microsoft Graph API services you'd like to use.
// export const graphConfig = {
//   graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
// };

// // export const ProtectedRoute = ({ children }) => {
// //   const isAuthenticated = useIsAuthenticated();

// //   return isAuthenticated ? children : <Navigate to={"/"} />;
// // };
// //  export const RedirectLoggedUser = ({ children }) => {
// //    const isAuthenticated = useIsAuthenticated();

// //    return !isAuthenticated ? children : <Navigate to={"/Home"} />;
// //  };
