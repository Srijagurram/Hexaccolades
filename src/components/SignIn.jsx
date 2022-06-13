// import React from "react";
// import { useMsal } from "@azure/msal-react";
// import { loginRequest } from "../authConfig";
// import Button from "react-bootstrap/Button";

// function handleLogin(instance) {
//     instance.loginPopup(loginRequest).catch(e => {
//         console.error(e);
//     });
// }

// /**
//  * Renders a button which, when selected, will open a popup for login
//  */
// export const SignInButton = () => {
//     const { instance } = useMsal();

//     return (
//         <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign in using Popup</Button>
//     );
// }
import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <Button variant="primary" className="ml-auto" onClick={() => handleLogin(instance)} align='right'>Sign in</Button>
    );
}